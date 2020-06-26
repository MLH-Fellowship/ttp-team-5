import React from 'react'

const TeamView = (props) => {
  console.log("props.allTeams = ", props.allTeams)
    return (
      <div className="container">
        {props.allTeams.map(team =>
          <div key={team.id} className="card" style={{width: "25rem", display:"inline-block", justifyContent: "left",margin: "1rem"}}>
            <img className="card-img-top" src={require("./images/logo-placeholder.jpg")} alt="Placehodler" />
            <div className="card-body">
              <h5 className="card-title" style={{color: "black"}}>Team Info</h5>
              <h5 className="card-text" style={{color: "black"}}>Team name: {team.name} </h5>
              <h5 className="card-text" style={{color: "black"}}>Country: {team.country}</h5>
              <h5 className="card-text" style={{color: "black"}}>Venue Name: {team.venue_name} </h5>
            </div>
          </div>
          )}
      </div>
    )
  }

export default TeamView