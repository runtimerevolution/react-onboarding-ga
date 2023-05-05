import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { TmdbApiClient } from '@services'
import { SearchField, TrendingHeader, TrendingMovieCard } from '@components'

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
      <SearchField />
      <TrendingHeader
        timeWindow={timeWindow}
        updateTimeWindow={updateTimeWindow}
      />
      <div
        className="top-container"
        style={{
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          justifyContent: isMobile ? 'flex-end' : 'flex-start',
        }}
      >
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
