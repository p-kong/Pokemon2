import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export default function FlippableCard({pokemon}) {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className = 'container'>
    { pokemon.map((p) => (
       <ReactCardFlip className = 'card' key={p.id} isFlipped={isFlipped}
       flipDirection="horizontal">
        <div onClick={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
          <h1>{p.name} </h1>
          <img src={p.sprites.front_default}  alt=''/>
          <h3>Number: {p.id}</h3>
          <h3>Height: {p.height}</h3>
          <h3>Weight: {p.weight}</h3>
          <h3>Type: {p.types[0].type.name}</h3>
          </div>

          <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <h1>{p.name} </h1>
          <img src={p.sprites.front_default}  alt=''/>
          <h3>Number:</h3>
          <h3>Height: </h3>
          <h3>Weight: </h3>
          <h3></h3>

      </div>
       </ReactCardFlip>
     ))}
    </div>
  )
}
