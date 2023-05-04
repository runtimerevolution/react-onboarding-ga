import { ApolloClient, InMemoryCache } from '@apollo/client'
import { Constants } from '@utils'
import { GetTrendingMovies } from './TmdbQueries.graphql'

const client = new ApolloClient({
  uri: Constants.TMDB_API_URI,
  cache: new InMemoryCache(),
})

const TmdbApiClient = {
  fetchTrendingMovies: function (timeWindow) {
    return client
      .query({ query: GetTrendingMovies, variables: { timeWindow } })
      .then((result) => result.data.trending.edges)
      .catch((error) => {
        console.log(`error fetching trending movies: ${error.message}`)
      })
  },
}

export default TmdbApiClient
