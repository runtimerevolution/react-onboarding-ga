import { useEffect, useState } from 'react'
import { TrendingHeader, TrendingMovieCard } from '@components'
import { TmdbApiClient } from '@services'

const TrendingMoviesPage = function () {
  const [timeWindow, setTimeWindow] = useState('Day')
  const [data, setData] = useState([])

  useEffect(() => {
    TmdbApiClient.fetchTrendingMovies(timeWindow).then((data) => {
      setData(data.filter((item) => item.node.images !== undefined))
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
            key={movieObj.node.id}
            topNumber={i + 1}
            posterPath={movieObj.node.images.posters[0].image}
            movieId={movieObj.node.id}
          />
        ))}
      </div>
    </>
  )
}

export default TrendingMoviesPage
