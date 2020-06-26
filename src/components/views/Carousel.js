import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("./images/soccerimg1.jpg")} alt="Soccer Ball"  />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                  The sport of soccer (called football in most of the world) is considered to be the 
                  world's most popular sport. 
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("./images/soccerimg2.jpg")} alt="Soccer Field" />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                  In soccer there are two teams of eleven players. Soccer is 
                  played on a large grass field with a goal at each end. The object of the game is to get
                  the soccer ball into the opposing team's goal.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("./images/soccerimg3.jpg")} alt="Soccer Players" />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                The key to soccer is that, with the exception of the goalie, players cannot touch the ball
                with their hands, they can only kick, knee, or head the ball to advance it or score a goal.
              </h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
    )
  }
}
