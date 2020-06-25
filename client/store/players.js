import axios from 'axios'

const initialState = {
  allPlayers: [],
  favoritePlayers: []
}

const FETCH_PLAYER = 'FETCH_PLAYER'
const SEARCH_PLAYERS = 'SEARCH_PLAYERS'
const FETCH_FAVORITE_PLAYERS = 'FETCH_FAVORITE_PLAYERS'
const ADD_FAVORITE_PLAYER = 'ADD_FAVORITE_PLAYER'
const REMOVE_FAVORITE_PLAYER = 'REMOVE_FAVORITE_PLAYER'

//Action Creator
const fetchAllPlayers = players => {
  return {
    type: FETCH_PLAYER,
    players
  }
}

const fetchFavoritePlayers = players => {
  return {
    type: FETCH_FAVORITE_PLAYERS,
    players
  }
}

const addFavoritePlayer = playerId => {
  return {
    type: ADD_FAVORITE_PLAYER,
    playerId
  }
}

const removeFavoritePlayer = playerId => {
  return {
    type: REMOVE_FAVORITE_PLAYER,
    playerId
  }
}

// Thunk Creators
export const fetchplayerThunk = input => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: `https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/players/?search=${input}&limit=20&fields=category,cover.url,first_release_date,genres,name,platforms,popularity,rating,rating_count,release_dates,screenshots,storyline,summary,tags,total_rating,total_rating_count,url`,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': '5d814ccfdde668d67c178b8cd959feff'
        },
        data:
          'limit: 20; fields category,cover.url,first_release_date,genres,name,platforms,popularity,rating,rating_count,release_dates,screenshots,storyline,summary,tags,total_rating,total_rating_count,url;'
      })
      console.log({data})
      dispatch(fetchAllPlayers(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchPlayersThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url:
          'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/players',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': '5d814ccfdde668d67c178b8cd959feff'
        },
        data:
          'limit: 20; fields category,cover.url,first_release_date,genres,name,platforms,popularity,rating,rating_count,release_dates,screenshots,storyline,summary,tags,total_rating,total_rating_count,url;'
      })

      console.log({data})

      dispatch(fetchAllPlayers(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchFavoritePlayersThunk = () => {
  return async (dispatch, useState) => {
    try {
      const {id} = useState().user

      const {data} = await axios.get(`/api/favorites/${id}`)

      console.log({data})

      const promises = data.map(player =>
        axios({
          url:
            'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/players/',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'user-key': '5d814ccfdde668d67c178b8cd959feff'
          },
          data: `limit: 20; fields category,cover.url,first_release_date,genres,name,platforms,popularity,rating,rating_count,release_dates,screenshots,storyline,summary,tags,total_rating,total_rating_count,url;where id=${
            player.playerId
          };`
        })
      )

      console.log({promises})

      Promise.all(promises).then(res => {
        console.log({res})

        const playerData = res.map(curRes => curRes.data[0])

        console.log({playerData})

        dispatch(fetchFavoritePlayers(playerData))
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const addFavoritePlayerThunk = playerId => {
  return async (dispatch, useState) => {
    try {
      console.log({playerId})

      const {id} = useState().user

      const {data} = await axios.post(`/api/favorites/${id}`, {playerId})

      console.log({data})

      dispatch(addFavoritePlayer(playerId))
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeFavoritePlayerThunk = playerId => {
  return async (dispatch, useState) => {
    try {
      const {id} = useState().user

      const {data} = await axios.delete(`/api/favorites/${id}/${playerId}`)

      console.log({data})

      dispatch(removeFavoritePlayer(playerId))
    } catch (error) {
      console.error(error)
    }
  }
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYER:
      return {
        ...state,
        allPlayers: action.players
      }
    case SEARCH_PLAYERS:
      return {
        ...state,
        allPlayers: action.player
      }
    case FETCH_FAVORITE_PLAYERS:
      return {
        ...state,
        favoritePlayers: action.players
      }
    case ADD_FAVORITE_PLAYER:
      return {
        ...state,
        favoritePlayers: [...state.favoritePlayers, action.playerId]
      }
    case REMOVE_FAVORITE_PLAYER:
      return {
        ...state,
        favoritePlayers: state.favoritePlayers.filter(
          player => player.id !== action.playerId
        )
      }
    default:
      return state
  }
}

export default playerReducer
