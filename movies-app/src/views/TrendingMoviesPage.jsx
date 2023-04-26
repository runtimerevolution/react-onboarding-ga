import { useEffect, useState } from 'react'
import { Constants } from '@utils'
import { TrendingHeader, TrendingMovieCard } from '@components'

const TrendingMoviesPage = function () {
  const [timeWindow, setTimeWindow] = useState('day')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(
      `${Constants.TMDB_ENDPOINT}trending/movie/${timeWindow}?api_key=${Constants.API_KEY}`
    )
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

export default TrendingMoviesPage
