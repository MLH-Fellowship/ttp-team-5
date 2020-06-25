import React, { Component } from 'react'

export default class HomeView extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="https://wallpaperaccess.com/soccer-4k">
              <img src={require("./images/soccerimg1.jpg")} alt="Soccer Ball" style={{width:"100%"}} />
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="https://www.123rf.com/photo_116518623_football-field-or-soccer-field-for-background-green-lawn-court-for-create-sport-game-.html">
              <img src={require("./images/soccerimg2.jpg")} alt="Soccer Field" style={{width:"100%"}} />
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="https://www.wallpaperflare.com/2018-fifa-world-cup-russia-4k-soccer-wallpaper-sbzpp">
              <img src={require("./images/soccerimg3.jpg")} alt="Soccer Players" style={{width:"100%"}} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
