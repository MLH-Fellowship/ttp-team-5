import React, { Component } from 'react'
import TeamView from '../views/TeamView'
import SearchFieldView from '../views/SearchFieldView'
import {connect} from 'react-redux'
import { debounce } from "lodash";
import { fetchTeamInfoThunk } from '../../store/utilities/teamSearch';


class TeamContainer extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }
  componentDidMount() {
    this.props.fetchTeamInfo()
  }

  handleInputChange =  (teamName) => {
    console.log("input: ", teamName)
    this.props.fetchPlayerInfo(teamName)
    this.setState({teams: this.props.teams});
  }

  render() {
    return (
      <div>
        <SearchFieldView onTermChange={debounce((teamName) => this.handleInputChange(teamName), 1000)}/>
        {/* <TeamView allTeams={this.props.teams}/> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("team state", state)
  // if (typeof state.teamSearch.data === 'undefined' ){
    return {
      teams: []
    };
  // }else{
  //   return {
  //     teams: state.teamSearch.data.api.teams
  //   }
  // }
  
      
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayerInfo: (teamName) => dispatch(fetchTeamInfoThunk(teamName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer)