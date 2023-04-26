import { useEffect, useState } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MuiToggleButton from '@mui/material/ToggleButton'
import { styled } from '@mui/material/styles'

const API_KEY = import.meta.env.VITE_TMDB_KEY
const TRENDING_ENDPOINT = 'https://api.themoviedb.org/3/trending/movie/'
const IMAGE_API_ENDPOINT = 'https://image.tmdb.org/t/p/original/'

const ToggleButton = styled(MuiToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: 'gray',
  },
  '&': {
    color: 'white',
  },
})

const TrendingMovies = function () {
  const [timeWindow, setTimeWindow] = useState('day')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${TRENDING_ENDPOINT}${timeWindow}?api_key=${API_KEY}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((data) => {
        setData(data.results)
      })
      .catch((error) => {
        console.log(`error fetching trending movies: ${error}`)
      })
  }, [timeWindow])

  const updateTimeWindow = function (event, newTimeWindow) {
    if (newTimeWindow !== null) {
      setTimeWindow(newTimeWindow)
    }
  }

  return (
    <>
      <TrendingHeader
        timeWindow={timeWindow}
        updateTimeWindow={updateTimeWindow}
      />
      <div className="top-container">
        {data.slice(0, 10).map((movieObj, i) => (
          <TrendingMovieCard
            key={i + 1}
            topNumber={i + 1}
            posterPath={movieObj.poster_path}
          />
        ))}
      </div>
    </>
  )
}

const TrendingHeader = function ({ timeWindow, updateTimeWindow }) {
  return (
    <>
      <h2>TMDB Top 10</h2>
      <ToggleButtonGroup
        value={timeWindow}
        exclusive
        onChange={updateTimeWindow}
        aria-label="trending time window"
      >
        <ToggleButton value="day" aria-label="day">
          day
        </ToggleButton>
        <ToggleButton value="week" aria-label="week">
          week
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

const TrendingMovieCard = function ({ topNumber, posterPath }) {
  return (
    <div className="trending-movie-container">
      <span className="trending-top-number">{topNumber}</span>
      <img
        className="trending-movie-img"
        src={`${IMAGE_API_ENDPOINT}${posterPath}`}
        alt="trending movie"
      />
    </div>
  )
}

export default TrendingMovies
