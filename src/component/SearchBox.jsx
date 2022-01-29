import React, { Component } from 'react'

const SearchBox = (props) => {
    return (
        <div className='col col-sm-4'>
            <div className='Fav'>
             <h1>Movies
            <input className='form-control' 
            value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)}
            placeholder='Type to search'>
            
            </input>
            </h1>
            </div>
        </div>
    )
}
export default SearchBox;