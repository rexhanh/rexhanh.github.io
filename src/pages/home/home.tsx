import me from "../../assets/me.jpeg";
import { Image } from "react-bootstrap";
import MyFooter from "../../components/Footer";
import { animated, useSpring } from "@react-spring/web";

import "./home.css";
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="child" id="child1">
            <Image className="img-cover-rd" src={me} roundedCircle />
          </div>
          <div className="child" id="child2">
            <h1>My name is Rex</h1>
            <p>
              I am currently pursuing my master's degree at the University of
              Toronto. I did my undergraduate work at UC Berkeley and have
              worked in various fields, such as software engineering and
              education. Current interests are in Machine Learning and
              Education.
            </p>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </>
  );
};

export default Home;
