import React, { Component } from 'react'
import PropTypes from 'prop-types'

function SmallCard({data}) {
    function TypeHandler(type) {
        if(type[1]) {
            return 
        }
    }
    return ( 
        <div className='sCard'>
            <header>
                <img src={data.sprites.front_default} alt={data.name}></img>
                <h2>{data.id}</h2>
            </header>
            <article>
                <h1>{data.name}</h1>
            </article>
        </div>
     );
}

SmallCard.propTypes = {
    data: PropTypes.array
}

export default SmallCard;