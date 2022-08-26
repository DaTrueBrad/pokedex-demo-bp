import React, {useState} from 'react'
import PokeCard from './PokeCard'

const PokedexSection = ({pokedex, add}) => {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  let pokemonDisplay = pokedex
  .filter((pkmn) => {
    return pkmn.name.includes(search)
  })
  .map((pkmn, index) => {
    return <PokeCard pkmn={pkmn} add={add}/>
  })

  //[ <div><h4></h4></div>,]

  return (
    <section>
      <h2>Catch your Pokemon!</h2>
      <input placeholder='Find my Pokemon!' onChange={handleChange} />
      <div className="pokedex-container">
        {pokemonDisplay}
      </div>
    </section>
  )
}

export default PokedexSection