import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import {HomeContainer, PlayerSearchContainer} from "../container"

export default class RoutesView extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/player" component={PlayerSearchContainer}/>
      </Switch>
    )
  }
}
