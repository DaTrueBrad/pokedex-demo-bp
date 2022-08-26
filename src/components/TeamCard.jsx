import React from 'react'

const TeamCard = ({pkmn}) => {

  const types = pkmn.types.map((type, index) => {
    return <h4 className={`${type.type.name} type`} >{type.type.name}</h4>
  })

  const stats = pkmn.stats.map((stat, index) => {
    return (
      <div className="stat-row">
        <h5>{stat.base_stat} {stat.stat.name}</h5>
      </div>
    )
  })

  return (
    <div className='team-card'>
      <img src={pkmn.sprites.other["official-artwork"].front_default} />
      <h3>{pkmn.name}</h3>
      <div className='type-container'>
        {types}
      </div>
      <div className='stat-container'>
        {stats}
      </div>
    </div>
  )
}

export default TeamCard