import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
    const addMovies = (e) => {
        e.preventDefault(); //Prevent browsers from refreshing everytime you add movie
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }]); //...prevMovies <= is a replica of previous object
    }
    return (
        <form onSubmit={addMovies}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button className="btn btn-primary">Add</button>
        </form>
    );
}
export default AddMovie;