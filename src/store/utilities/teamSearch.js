import axios from "axios";

const initialState = {
  allTeams: [],

}

// Action Types
const FETCH_TEAMINFO = "FETCH_TEAMINFO";

// Action Creators
const fetchTeamInfo = (team) => {
  return {
    type: FETCH_TEAMINFO,
    payload: team,
  };
};


const API_KEY = process.env.REACT_APP_TEAM_INFO_API_KEY;

export const fetchTeamInfoThunk = (teamName) => (dispatch) => {
   console.log("name", teamName)
   return axios({
    "method":"GET",
    "url":`https://v2.api-football.com/teams/search/${teamName}`,
    "headers":{
        "x-rapidapi-key": API_KEY,
      }
    })
    .then((response)=>{
      console.log(response)
      dispatch(fetchTeamInfo(response))
  })
    .catch((error)=>{
      console.log(error)
})

};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMINFO:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;