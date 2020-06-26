import axios from "axios";

const initialState = {
  allTeams: [],

}

// Action Types
const FETCH_TEAMINFO = "FETCH_TEAMINFO";

// Action Creators
const fetchTeamInfo = (Team) => {
  return {
    type: FETCH_TEAMINFO,
    payload: Team,
  };
};

// const API_HOST = process.env.PLAYER_INFO_API_HOST;
const API_KEY = process.env.REACT_APP_TEAM_INFO_API_KEY;
// const BASE_URL = "https://api.edamam.com/search"
// const RECIPE_BASE = "http://www.edamam.com/ontologies/edamam.owl#recipe_"

// Thunk Creators
export const fetchTeamInfoThunk = (TeamName) => (dispatch) => {
   console.log("name", TeamName)
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
