import { useEffect, useState } from 'react'
import { TmdbApiClient } from '@services'
import { TrendingHeader, TrendingMovieCard } from '@components'

const TrendingMoviesPage = function () {
  const [timeWindow, setTimeWindow] = useState('day')
  const [data, setData] = useState([])

  useEffect(() => {
    TmdbApiClient.fetchTrendingMovies(timeWindow).then((data) => setData(data))
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
            key={movieObj.id}
            topNumber={i + 1}
            posterPath={movieObj.poster_path}
          />
        ))}
      </div>
    </>
  )
}

export default TrendingMoviesPage
