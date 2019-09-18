import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 12131
        },
        {
            name: 'SuperMan',
            price: '$20',
            id: 14654
        },
        {
            name: 'Detective Pikachu',
            price: '$30',
            id: 12189
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}