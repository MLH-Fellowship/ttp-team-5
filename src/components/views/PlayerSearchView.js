import React from 'react'
import PropTypes from "prop-types"

const PlayerSearchView = (props) => {
  console.log("props.player = ", props.players)
  return(
    // <div className="container">
    //   {props.players.map(player =>
        // <div key={player.id}>
        //   <h5>First Name: {player.firstname}</h5>
        //   <h5>Last Name: {player.lastname}</h5>
        //   <h5>Age: {player.age}</h5>
        //   <h5>Position: {player.position}</h5>
        //   <h5>Height: {player.height}</h5>
        //   <h5>Weight: {player.weight}</h5>
    //     // </div>
    //   )}
    // </div>
    <></>
  )
}

PlayerSearchView.propTypes = {
  allPlayers: PropTypes.array.isRequired
}


export default PlayerSearchView