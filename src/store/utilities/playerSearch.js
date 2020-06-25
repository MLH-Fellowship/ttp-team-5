import axios from "axios";

const initialState = {
  allPlayers: [],

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

const API_HOST = process.env.PLAYER_INFO_API_HOST;
const API_KEY = process.env.PLAYER_INFO_API_KEY;
// const BASE_URL = "https://api.edamam.com/search"
// const RECIPE_BASE = "http://www.edamam.com/ontologies/edamam.owl#recipe_"

// Thunk Creators
export const fetchPlayerInfoThunk = (playerName) => (dispatch) => {
  console.log("name", playerName)
   return axios({
    "method":"GET",
    "url":`https://api-football-v1.p.rapidapi.com/v2/players/search/${playerName}`,
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
    "useQueryString":true
      }
    })
    .then((response)=>{
      console.log(response)
      dispatch(fetchPlayerInfo(response))
  })
    .catch((error)=>{
      console.log(error)
})

// axios.get(BASE_URL, {
//     params: {
//       r: `${RECIPE_BASE}${id}`,
//       app_id: API_ID,
//       app_key: API_KEY,
//     }
//   }).then(res => res.data).then(recipe => {
//     dispatch(fetchMeal(recipe[0]))
//   })
//     .catch(err => console.log(err))
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