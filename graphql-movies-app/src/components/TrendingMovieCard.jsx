const TrendingMovieCard = function ({ topNumber, posterPath, movieId }) {
  return (
    <div className="trending-movie-container">
      <span className="trending-top-number">{topNumber}</span>
      <img
        className="trending-movie-img"
        src={`${posterPath}`}
        alt="trending movie"
      />
    </div>
  )
}

export default TrendingMovieCard
