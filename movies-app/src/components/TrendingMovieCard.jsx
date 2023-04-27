import Constants from '../utils/Constants'

const TrendingMovieCard = function ({ topNumber, posterPath }) {
  return (
    <div className="trending-movie-container">
      <span className="trending-top-number">{topNumber}</span>
      <img
        className="trending-movie-img"
        src={`${Constants.IMAGE_API_ENDPOINT}${posterPath}`}
        alt="trending movie"
      />
    </div>
  )
}

export default TrendingMovieCard
