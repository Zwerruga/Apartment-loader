import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setApartments,
  likeApartments,
  dislikeApartments
} from "./redux/store.js";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Zwerruga/Appartment-loader/response"
    )
      .then((res) => res.json())
      .then((res) => dispatch(setApartments(res)));
  }, [dispatch]);
  return (
    <>
      <Nav />
      <div className='cards'>
        {!state.length ? (
          <Loader />
        ) : (
          state.map((a) => (
            <Card
              key={a.id}
              title={a.attributes.title}
              rooms={a.attributes.rooms}
              address={Object.values(a.attributes.address).reduce(
                (cur, next) => cur + ", " + next
              )}
              area={a.area + a.unit || ""}
              onLikeClick={() => {
                a.like
                  ? dispatch(dislikeApartments(a.id))
                  : dispatch(likeApartments(a.id));
              }}
              like={a.like}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
