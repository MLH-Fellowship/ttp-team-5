import React from 'react'

const PlayerSearchView = (props) => {
  console.log("props.player = ", props.allPlayers)
  return(
    <div className="container">
      {props.allPlayers.map(player =>
          <div key={player.id} className="card" style={{width: "25rem", display:"inline-block", justifyContent: "left",margin: "1rem"}}>
            <img className="card-img-top" src={require("./images/person-placeholder.jpg")} alt="Placehodler" />
            <div className="card-body">
              <h5 className="card-title" style={{color: "black"}}>Player Info</h5>
              <h5 className="card-text" style={{color: "black"}}>First Name: {player.firstname}</h5>
              <h5 className="card-text" style={{color: "black"}}>Last Name: {player.lastname}</h5>
              <h5 className="card-text" style={{color: "black"}}>Position: {player.position}</h5>
              <h5 className="card-text" style={{color: "black"}}>Age: {player.age}</h5>
              <h5 className="card-text" style={{color: "black"}}>Height: {player.height}</h5>
              <h5 className="card-text" style={{color: "black"}}>Weight: {player.weight}</h5>
            </div>
          </div>
      )}
    </div>
  )
}

export default PlayerSearchView