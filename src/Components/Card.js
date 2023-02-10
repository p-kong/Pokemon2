import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export default function Card({pokemon}) {

  const [isFlipped, setIsFlipped] = useState(false);
  let style = `${pokemon.types[0].type.name} "cardFront"`

  return (
    <div className = "container">
       <ReactCardFlip className = 'card' key={pokemon.id} isFlipped={isFlipped}
       flipDirection="horizontal">
        <div onClick={() => setIsFlipped((prev) => !prev)}
        className= {style}
      >
          <h1>{pokemon.name} </h1>
          <img src={pokemon.sprites.front_default}  alt=''/>
          <h3>Number: {pokemon.id}</h3>
          <h3>Height: {pokemon.height}</h3>
          <h3>Weight: {pokemon.weight}</h3>
          <h3>Type: {pokemon.types[0].type.name}</h3>
          </div>

          <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className= {style}
      >
        <h1>{pokemon.name} </h1>
          <img src={pokemon.sprites.back_default}  alt=''/>
          <h3>HP: {pokemon.stats[0].base_stat}</h3>
          <h3>Attack: {pokemon.stats[1].base_stat}</h3>
          <h3>Defense: {pokemon.stats[2].base_stat}</h3>
          <h3>Speed: {pokemon.stats[5].base_stat}</h3>
      </div>
       </ReactCardFlip>
    </div>
  )
}
