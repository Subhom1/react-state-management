import React, { useState } from 'react';
import { MovieContext } from './MovieContext';

const Movie = ({ name, price }) => {
    return (
        <div className="d-flex align-items-center flex-column text-dark justify-content-center">
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
}

export default Movie;