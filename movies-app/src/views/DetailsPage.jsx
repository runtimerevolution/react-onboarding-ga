import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TmdbApiClient } from '@services'

const DetailsPage = function () {
  const [data, setData] = useState({})
  const params = useParams()

  useEffect(() => {
    TmdbApiClient.fetchMovieDetails(params.id).then((data) => {
      setData(data)
    })
  }, [])

  return <div>Details Page</div>
}

export default DetailsPage
