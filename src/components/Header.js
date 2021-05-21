import React from 'react'
import Typed from "react-typed";
import {Link} from "react-scroll"
import Mahir_Khandaker_Resume from "./MahirKhandakerResume_.pdf"


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h3>Hello, </h3>
                <h1>I'm Mahir</h1>
                <p>I'm a 4th Year Biomedical and Electrical Engineering Student</p>
                <Typed
                    className="typed-text"
                    strings={["Experienced in: Full-Stack Development", "Experienced in: Nodejs", "Experienced in: React", "Experienced in: HTML/CSS/Javascript","Experienced in: Object-Oriented Programming"]}
                    typeSpeed={30}
                    backSpeed={20}
                    loop
                />
                {/* <Link smooth={true} to="contacts" className="btn-main-offer" href="#">contact me</Link> */}
                <a className="btn-main-offer button" href={Mahir_Khandaker_Resume} download="Mahir_Khandaker_Resume">Download Resume</a>

            </div>
        </div>
    )
}

export default Header
