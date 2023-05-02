import { Constants } from '@utils'

const TmdbApiClient = {
  fetchTrendingMovies: function (timeWindow) {
    return fetch(
      `${Constants.TMDB_ENDPOINT}trending/movie/${timeWindow}?api_key=${Constants.API_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((data) => {
        return data.results
      })
      .catch((error) => {
        console.log(`error fetching trending movies: ${error}`)
      })
  },
  search: function (queryString) {
    return fetch(
      `${Constants.TMDB_ENDPOINT}search/multi?api_key=${Constants.API_KEY}&query=${queryString}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((data) => {
        return data.results
      })
      .catch((error) => {
        console.log(`error searching: ${error}`)
      })
  },
}

export default TmdbApiClient
