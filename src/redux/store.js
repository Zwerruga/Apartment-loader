import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const constants = {
  SET_APARTMENTS: "SET_APARTMENTS",
  LIKE: "LIKE",
  DISLIKE: "DISLIKE"
};

export const setAppartments = (apartments) => (dispatch) =>
  dispatch({
    type: constants.SET_APARTMENTS,
    payload: apartments
  });

export const likeAppartments = (apartmentsId) => (dispatch) =>
  dispatch({
    type: constants.LIKE,
    payload: apartmentsId
  });
export const dislikeAppartments = (apartmentsId) => (dispatch) =>
  dispatch({
    type: constants.DISLIKE,
    payload: apartmentsId
  });

const likes =
  new Set(JSON.parse(localStorage.getItem("like appartments"))) || [];
const initialState = [];

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_APARTMENTS:
      const payloadWithLikes = payload.map((a) => (a.like = likes[a.id]));
      return [...state, ...payloadWithLikes];
    case constants.LIKE:
      return state.map((a) => {
        if (a.id === payload) a.like = true;
        return a;
      });
    case constants.DISLIKE:
      return state.map((a) => {
        if (a.id === payload) a.like = false;
        return a;
      });
    default:
      return state;
  }
};

export const store = createStore(Reducer, applyMiddleware(thunk));

store.subscribe(() => {
  const likes = store
    .getState()
    .filter((a) => a.like)
    .map((a) => a.id);
  localStorage.setItem("like appartments", likes);
});
