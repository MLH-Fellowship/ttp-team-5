import axios from "axios";

const initialState = {
  players: [],
}

// Action Types
const FETCH_PLAYERINFO = "FETCH_PLAYERINFO";

// Action Creators
const fetchPlayerInfo = (player) => {
  return {
    type: FETCH_PLAYERINFO,
    payload: player,
  };
};

// const API_HOST = process.env.PLAYER_INFO_API_HOST;
const API_KEY = process.env.REACT_APP_PLAYER_INFO_API_KEY;

// Thunk Creators
export const fetchPlayerInfoThunk = (playerName) => (dispatch) => {
//    console.log("name", playerName)
   return axios({
    "method":"GET",
    "url":`https://v2.api-football.com/players/search/${playerName}`,
    "headers":{
        "x-rapidapi-key": API_KEY,
      }
    })
    .then((response)=>{
    //   console.log(response)
      dispatch(fetchPlayerInfo(response))
  })
    .catch((error)=>{
      console.log(error)
  })
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERINFO:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
