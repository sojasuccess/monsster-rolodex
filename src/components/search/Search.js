import React from 'react';
import './Search.css'
// import CardList from '../card-list/CardList'

export const Search = ({ placeholder, handleChange }) => {
  return (
    <div >
      <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}

export default Search
