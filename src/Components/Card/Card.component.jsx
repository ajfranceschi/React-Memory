// import React from "react";
import './Card.styles.css';
import AnaBray from '../../assets/images/AnaBray.jpg';
import Cayde from '../../assets/images/Cayde.jpeg';
import Hawthorne from '../../assets/images/Hawthorne.jpeg';
import Holiday from '../../assets/images/Holiday.jpeg';
import Ikora from '../../assets/images/Ikora.jpg';
import Petra from '../../assets/images/Petra.png';
import Shaxx  from '../../assets/images/Shaxx.jpeg';
import Sloane from '../../assets/images/Sloane.jpeg';
import Spider from '../../assets/images/Spider.png';
import Tyra from '../../assets/images/Tyra.jpeg';
import Xur from '../../assets/images/Xur.jpg';
import Zavala from '../../assets/images/Zavala.jpeg';

const Card = ({imageName, handleCardClick}) => {
    const images = {
        AnaBray: AnaBray,
        Cayde: Cayde,
        Hawthorne: Hawthorne,
        Holiday: Holiday,
        Ikora: Ikora,
        Petra: Petra,
        Shaxx: Shaxx,
        Sloane: Sloane,
        Spider: Spider,
        Tyra: Tyra,
        Xur: Xur,
        Zavala: Zavala
    }
    return (
        <div className="mx-3 my-2 d-flex justify-content-center">
            <button
                className="card p-0 m-0 imageCard"
                onClick={handleCardClick}
                style={{background: `url(${images[imageName]})`, backgroundSize: 'cover'}}
                value={imageName}
            ></button>
        </div>
    )
}

export default Card;