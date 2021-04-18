import React from 'react'
import ffl from "../images/FFL_website.png"
import ecomm from "../images/ecomm.png"
import android from "../images/androidApp.png"
import netflix from "../images/netflix_chrome_extension.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //FitForLife
    const openPopupboxFitForLife = () =>{
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={ffl}/>
                <p>Fit For Life Website</p>
                <b>Website:</b> <a className="hyper-link" onClick={() => window.open("http://www.fitforlifejacksonsquare.ca/")}>http://www.fitforlifejacksonsquare.ca/</a>
                <br></br>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MahirKh/FitForLife_Website")}>https://github.com/MahirKh/FitForLife_Website </a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigFFL = {
        titleBar: {
            enable: true,
            text: "Fit For Life Website"
        },
        fadeIn:true,
        fadeInSpeed:500
    }


    //Ecomm
    const openPopupboxEcomm = () =>{
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={ecomm}/>
                <p>E-commerce Website</p>
                {/* <b>Website:</b> <a className="hyper-link" onClick={() => window.open("http://www.fitforlifejacksonsquare.ca/")}>http://www.fitforlifejacksonsquare.ca/</a>
                <br></br> */}
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MahirKh/ecommerceWebsite")}>https://github.com/MahirKh/ecommerceWebsite</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigEcomm = {
        titleBar: {
            enable: true,
            text: "E-commerce Website"
        },
        fadeIn:true,
        fadeInSpeed:500        
    }

    //Android
    const openPopupboxAndroid = () =>{
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={android}/>
                <p>Rotator Cuff Rehabilitation Android App</p>
                {/* <b>Website:</b> <a className="hyper-link" onClick={() => window.open("http://www.fitforlifejacksonsquare.ca/")}>http://www.fitforlifejacksonsquare.ca/</a>
                <br></br> */}
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MahirKh/RotatorCuffRehabAndroidApp")}>https://github.com/MahirKh/RotatorCuffRehabAndroidApp</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigAndroid = {
        titleBar: {
            enable: true,
            text: "Rotator Cuff Rehabilitation Android App"
        },
        fadeIn:true,
        fadeInSpeed:500        
    }

    //Netflix
    const openPopupboxNetflix = () =>{
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={netflix}/>
                <p></p>
                {/* <b>Website:</b> <a className="hyper-link" onClick={() => window.open("http://www.fitforlifejacksonsquare.ca/")}>http://www.fitforlifejacksonsquare.ca/</a>
                <br></br> */}
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MahirKh/netflixRatingChromeExtension")}>https://github.com/MahirKh/netflixRatingChromeExtension</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Ratings Chrome Extension"
        },
        fadeIn:true,
        fadeInSpeed:500        
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxFitForLife}>
                        <img className="portfolio-image" src={ffl}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxEcomm}>
                        <img className="portfolio-image" src={ecomm}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxAndroid}>
                        <img className="portfolio-image" src={android}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFFL} />
            <PopupboxContainer {...popupboxConfigEcomm} />
            <PopupboxContainer {...popupboxConfigAndroid} />
            <PopupboxContainer {...popupboxConfigNetflix} />
        </div>
    )
}

export default Portfolio
