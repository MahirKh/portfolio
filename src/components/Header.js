import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Mahir_Khandaker_Resume from "./MahirKhandakerResume_.pdf";
import linkedin from "../images/linkedin.svg";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h3>Hello, </h3>
        <h1>I'm Mahir</h1>
        <p>I'm a 4th Year Biomedical and Electrical Engineering Student</p>
        <Typed
          className="typed-text"
          strings={[
            "Experienced in: Full-Stack Development",
            "Experienced in: Node.js",
            "Experienced in: React/React Native",
            "Experienced in: HTML/CSS/Javascript",
            "Experienced in: Object-Oriented Programming",
          ]}
          typeSpeed={30}
          backSpeed={20}
          loop
        />
        {/* <Link smooth={true} to="contacts" className="btn-main-offer" href="#">contact me</Link> */}
        <a
          className="button"
          href={Mahir_Khandaker_Resume}
          download="Mahir_Khandaker_Resume"
        >
          <p>Download Resume</p>
        </a>
        <div className="row">
          <div>{linkedin}</div>
          <div>Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
