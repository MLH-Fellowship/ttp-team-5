// import axios from "axios";

// // Action Types
// const FETCH_PLAYERIMAGE = "FETCH_PLAYERIMAGE";

// // Action Creators
// const fetchPlayerImage = (player) => {
//   return {
//     type: FETCH_PLAYERIMAGE,
//     payload: player,
//   };
// };

// const API_HOST = process.env.PLAYER_INFO_API_HOST;
// const API_KEY = process.env.PLAYER_INFO_API_KEY;
// // const BASE_URL = "https://api.edamam.com/search"
// // const RECIPE_BASE = "http://www.edamam.com/ontologies/edamam.owl#recipe_"

// // Thunk Creators
// export const fetchPlayerImageThunk = (playerName) => (dispatch) => {
//   console.log("name", playerName)
//    return axios({
//     "method":"GET",
//     "url":`https://v2.api-football.com/players/search/${playerName}`,
//     "headers":{
//     "x-rapidapi-key": API_KEY,
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//       dispatch(fetchPlayerInfo(response))
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

// // axios.get(BASE_URL, {
// //     params: {
// //       r: `${RECIPE_BASE}${id}`,
// //       app_id: API_ID,
// //       app_key: API_KEY,
// //     }
// //   }).then(res => res.data).then(recipe => {
// //     dispatch(fetchMeal(recipe[0]))
// //   })
// //     .catch(err => console.log(err))
// };

// // Reducer
// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_PLAYERIMAGE:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default reducer;