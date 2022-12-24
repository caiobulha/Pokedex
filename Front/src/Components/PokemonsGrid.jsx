import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Styles/PokemonsGrid.css'

function PokemonsGrid({data}) {
    return ( 
        <div className='grid'>
        </div>
     );
}

PokemonsGrid.propTypes = {
    data: PropTypes.array
}

export default PokemonsGrid;