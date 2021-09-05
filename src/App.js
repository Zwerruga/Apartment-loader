import "./App.css";
import { Carousel } from "react-responsive-carousel";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <nav>
        <div class='nav-wrapper'>
          <a href='#' class='brand-logo'>
            Logo
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contacts'>Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
      <Carousel showThumbs={false} showArrow={true}>
        <Card
          src='https://materializecss.com/images/sample-1.jpg'
          legend={
            "Esse velit Lorem ullamco Lorem ea id amet eu reprehenderit voluptate aliquip eiusmod ex. Elit est magna adipisicing nisi et eu sint non sunt deserunt labore dolor. Ut dolor non ad id anim incididunt qui occaecat deserunt magna consequat mollit. Nulla esse culpa ad incididunt irure occaecat. Cillum tempor cillum adipisicing irure ea occaecat aute quis consectetur anim incididunt. Eu occaecat sit labore adipisicing laboris eiusmod ea velit magna exercitation mollit quis velit."
          }
        />
        <Card
          src='https://materializecss.com/images/sample-1.jpg'
          legend={
            "Esse velit Lorem ullamco Lorem ea id amet eu reprehenderit voluptate aliquip eiusmod ex. Elit est magna adipisicing nisi et eu sint non sunt deserunt labore dolor. Ut dolor non ad id anim incididunt qui occaecat deserunt magna consequat mollit. Nulla esse culpa ad incididunt irure occaecat. Cillum tempor cillum adipisicing irure ea occaecat aute quis consectetur anim incididunt. Eu occaecat sit labore adipisicing laboris eiusmod ea velit magna exercitation mollit quis velit."
          }
        />
        <Card
          src='https://materializecss.com/images/sample-1.jpg'
          legend={
            "Esse velit Lorem ullamco Lorem ea id amet eu reprehenderit voluptate aliquip eiusmod ex. Elit est magna adipisicing nisi et eu sint non sunt deserunt labore dolor. Ut dolor non ad id anim incididunt qui occaecat deserunt magna consequat mollit. Nulla esse culpa ad incididunt irure occaecat. Cillum tempor cillum adipisicing irure ea occaecat aute quis consectetur anim incididunt. Eu occaecat sit labore adipisicing laboris eiusmod ea velit magna exercitation mollit quis velit."
          }
        />
      </Carousel>
      <footer class='page-footer'>
        <div class='container'>
          <div class='row'>
            <div class='col l6 s12'>
              <h5 class='white-text'>Footer Content</h5>
              <p class='grey-text text-lighten-4'>
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div class='col l4 offset-l2 s12'>
              <h5 class='white-text'>Links</h5>
              <ul>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'>
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='footer-copyright'>
          <div class='container'>
            © 2021 Copyright Text
            <a class='grey-text text-lighten-4 right' href='#!'>
              More Links
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
