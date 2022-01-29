import React, { useState, Component, useEffect } from 'react'
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import SearchBox from './SearchBox';
import AddFavourite from './AddFavourite';


export default function Home({handleLogout}) {
  
    const[movies, setMovies]=useState([ ]);

    const [searchValue, setSearchValue]=useState('');
    const [favourite, setFavourite]= useState([]);
     
  const getMovieRequest = async(searchValue) => {
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=fb82dab4`;
    const response = await fetch (url);
    const responseJson = await response.json();
 
    if(responseJson.Search)
    {
    setMovies(responseJson.Search);
    }

  };
  useEffect (()=> {
    getMovieRequest(searchValue);
  }, [searchValue]);

const addFavouriteMovie=(movie) =>
{
  const newFavouriteList = [...favourite, movie];
  setFavourite(newFavouriteList);
}



    return (
      <>
      <div className='movie-app'>
      <div >
      <span  className='Kkk' onClick={handleLogout}> For logout click here</span>
    
     
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}  />
      
      </div>
        <div className='row' >
    
      <MovieList movies={movies}
       handleFavouritesClick={addFavouriteMovie}
        favouriteComponent={AddFavourite} />
      </div>
      <div className='Fav'>Favourites</div>
        <div className='row'>
        
          <MovieList
           movies={favourite}
           handleFavouritesClick={addFavouriteMovie}
           favouriteComponent={AddFavourite} />
        </div>
      
      </div>
      </>
    )
  
}
