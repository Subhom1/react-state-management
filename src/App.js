import React from 'react';
import './App.css';
import Movies from './MovieList'
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import Nav from './Nav';
import AddMovie from './AddMovies';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <Movies />
      </div>
    </MovieProvider >
  );
}

export default App;
