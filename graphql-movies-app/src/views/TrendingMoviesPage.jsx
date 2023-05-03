import { useEffect, useState } from 'react'
import { TrendingHeader, TrendingMovieCard } from '@components'

const TrendingMoviesPage = function () {
  const [timeWindow, setTimeWindow] = useState('day')
  const [data, setData] = useState([])

  useEffect(() => {}, [timeWindow])

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
            movieId={movieObj.id}
          />
        ))}
      </div>
    </>
  )
}

export default TrendingMoviesPage
