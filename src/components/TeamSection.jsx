import React from 'react'
import TeamCard from './TeamCard'

const TeamSection = ({team}) => {

  const teamList = team.map((pkmn, index) => {
    return <TeamCard pkmn={pkmn} />
  })

  return (
    <div>
      <h1>My Team</h1>
      <div className='team-container'>
        {teamList}
      </div>
    </div>
  )
}

export default TeamSection