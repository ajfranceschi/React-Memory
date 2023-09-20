import React from 'react';
import './Jumbotron.styles.css';

const Jumbotron = ({title}) => {
    return(
        <div className='jumbotron-fluid d-flex justify-content-center align-items-center text-center'>
            <h1>{title}</h1>
        </div>
    )
};

export default Jumbotron;