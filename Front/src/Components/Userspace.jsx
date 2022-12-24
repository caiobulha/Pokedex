import React from 'react';
import PropTypes from 'prop-types'
import '../Styles/Userspace.css'

function Userspace({pfp, name, friends, favorites}) {
    // const imgHandler = {
    //     'gengar': 
    // }

    return ( 
        <div className='globalUserArea'>
            <div className="userspace">
                <header>
                    <div className="pictureWrap"><img src={pfp} alt={pfp}/></div>
                    <h1>{name}</h1>
                </header>
                <article>
                    <button type="button" className="friends">
                        <h2>Friends</h2>
                    </button>
                </article>
            </div>
        </div>  
     );
}

Userspace.prpTypes = {
    pfp: PropTypes.any,
    name: PropTypes.string,
    friends: PropTypes.array,
    favorites: PropTypes.array  
}

export default Userspace;