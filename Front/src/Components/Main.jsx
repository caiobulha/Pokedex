import React, { Component, useEffect } from 'react'
import SearchBar from './SearchBar';
import Userspace from './Userspace';
import '../Styles/Main.css'
import user from '../assets/user.png'
import { useState } from 'react';
import PokemonsGrid from './PokemonsGrid';

function Main() {
    const[pokemons, setPokemons] = useState()
    var actualPokemons = []
    useEffect(() => {
        var url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9'
        fetch(url, {
            method: 'GET'
        }).then(res => res.json().then(data => {
            actualPokemons.push(data.results)
            setPokemons(actualPokemons)
        }))
    }, [])
    return ( 
        <div className='main'>
            <div className="inputWrapper">
                <SearchBar placeholder={"Find the pokemon.."}/>
            </div>
            <div className='contentWrapper'>
                <aside>
                    <Userspace pfp={user} name={"Chetay"} />
                </aside>
                    <PokemonsGrid data={pokemons}/>
            </div>
        </div>
     );
}

export default Main;