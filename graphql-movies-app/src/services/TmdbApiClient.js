import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Constants } from '@utils'

const client = new ApolloClient({
  uri: Constants.TMDB_API_URI,
  cache: new InMemoryCache(),
})

const GET_TRENDING_MOVIES = gql`
  query GetTrendingMovies($timeWindow: TimeWindow!) {
    trending(timeWindow: $timeWindow) {
      edges {
        node {
          __typename
          ... on Movie {
            id
            images {
              posters {
                image(size: Original)
              }
            }
          }
        }
      }
    }
  }
`

const TmdbApiClient = {
  fetchTrendingMovies: function (timeWindow) {
    return client
      .query({ query: GET_TRENDING_MOVIES, variables: { timeWindow } })
      .then((result) => result.data.trending.edges)
      .catch((error) => {
        console.log(`error fetching trending movies: ${error.message}`)
      })
  },
}

export default TmdbApiClient
