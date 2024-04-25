import { animated, useSpring } from "@react-spring/web";
import "./about.css";
import { aboutMeText, experienceText } from "../../utils/constant";
import MyFooter from "../../components/Footer";
import Skills from "../../components/Skills";
import {
  otherToolsList,
  programmingList,
  pythonlibList,
  languageList,
} from "../../utils/constant";
const About = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );
  return (
    <>
      <div className="about-container">
        <animated.div style={props} className="about-content-container">
          {/* <div className="about-content-container"> */}
          <h1>About Me </h1>
          <p>{aboutMeText}</p>
          {experienceText.map((item, index) => (
            <p>{item}</p>
          ))}
          <h1>Skills</h1>
          <Skills name="Programming Languages" data={programmingList} />
          <Skills name="Python Library" data={pythonlibList} />
          <Skills name="Other Tools" data={otherToolsList} />
          <Skills name="Languages" data={languageList} />
          {/* </div> */}
        </animated.div>
        <MyFooter />
      </div>
    </>
  );
};

export default About;
