//imrr
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Styles/SearchBar.css'

function SearchBar({placeholder}) {
    return ( 
        <div className='searchWrapper'>
        <input type="text" placeholder={placeholder} className="searchBar"/>
        </div>
     );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string
}

export default SearchBar;