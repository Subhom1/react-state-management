import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className='Navbar'>
            <h3 className="d-flex align-items-center ml-5">DevSub</h3>
            <div className="container">
                <p>No. of movies: {movies.length}</p>
            </div>
        </div>
    );
}
export default Nav;