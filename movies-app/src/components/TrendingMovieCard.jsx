import { useNavigate } from 'react-router-dom'
import Constants from '../utils/Constants'

const TrendingMovieCard = function ({ topNumber, posterPath, movieId }) {
  const navigate = useNavigate()

  const handlePosterClick = function () {
    navigate(`/media/${movieId}`)
  }

  return (
    <div className="trending-movie-container">
      <span className="trending-top-number">{topNumber}</span>
      <img
        className="trending-movie-img"
        src={`${Constants.IMAGE_API_ENDPOINT}${posterPath}`}
        alt="trending movie"
        onClick={handlePosterClick}
      />
    </div>
  )
}

export default TrendingMovieCard
