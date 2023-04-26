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
}

export default TmdbApiClient
