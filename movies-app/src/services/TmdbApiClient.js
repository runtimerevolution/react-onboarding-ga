import axios from 'axios'
import { Constants } from '@utils'

const tmdbInstance = axios.create({
  baseURL: Constants.TMDB_ENDPOINT,
  params: { api_key: Constants.API_KEY },
})

const TmdbApiClient = {
  fetchTrendingMovies: function (timeWindow) {
    return tmdbInstance
      .get(`/trending/movie/${timeWindow}`)
      .then((res) => {
        if (res.status === 200) {
          return res.data.results
        }
        throw res
      })
      .catch((error) => {
        console.log(`error fetching trending movies: ${error.message}`)
      })
  },
  search: function (queryString) {
    return tmdbInstance
      .get(`/search/movie`, { params: { query: queryString } })
      .then((res) => {
        if (res.status === 200) {
          return res.data.results
        }
        throw res
      })
      .catch((error) => {
        console.log(`error searching: ${error.message}`)
      })
  },
  fetchMovieDetails: function (movieId) {
    return tmdbInstance
      .get(`/movie/${movieId}`)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
        throw res
      })
      .catch((error) => {
        console.log(`error fetching movie details: ${error.message}`)
      })
  },
}

export default TmdbApiClient
