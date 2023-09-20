import React from 'react';
import './Header.styles.css';
import HeaderItem from "../HeaderItem/HeaderItem.component.jsx";

const Header = ({score, topScore, isPlaying, isGuessRight, headerColor}) => {
    return (
        <div className="navbar sticky-top">
            <div className="col-4 text-center">
                <a className="navbar-brand" id="brand" href="/">
                    Memory Game
                </a>
            </div>
            <div className="col-4 text-center">
                <HeaderItem isPlaying={isPlaying} isGuessRight={isGuessRight} headerColor={headerColor}/>
            </div>
            <div className="col-4">
                <HeaderItem itemName="score" score={score} topScore={topScore}/>
            </div>
        </div>
    );
};

export default Header;