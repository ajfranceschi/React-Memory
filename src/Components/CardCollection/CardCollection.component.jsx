import React from "react";
import './CardCollection.styles.css';
import Card from "../Card/Card.component.jsx";

const CardCollection = ({state, handleCardClick}) => {
    return (
        <div className="container-fluid d-flex justify-content-center px-0 mx-sm-0">
            <div className="row pt-2 d-flex justify-content-center align-items-center cardContainer">
                {state.imageNamesArray.map((imageName, index) => {
                    return <Card key={index} imageName={imageName} handleCardClick={handleCardClick}/>
                })}
            </div>
        </div>
    )
}

export default CardCollection;