import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import {HomeContainer, TeamContainer } from "../container"
import PlayerSearchContainer from '../container/PlayerSearchContainer';
import axios from "axios";

export default class RoutesView extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/player" component={PlayerSearchContainer} handleSubmit={this.handleSubmit} clearCurrentPlayer={this.clearCurrentPlayer} />
        <Route exact path="/teams" component={TeamContainer}/>
      </Switch>
    )
  }
}
