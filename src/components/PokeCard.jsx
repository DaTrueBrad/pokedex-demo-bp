import React from 'react'

const PokeCard = ({pkmn, add}) => {
  return (
    <div className='pokedex-entry'>
      <img src={pkmn.img} />
      <h4>{pkmn.name}</h4>
      <button className='small-btn' onClick={() => add(pkmn)}>+</button>
    </div>
  )
}

export default PokeCard