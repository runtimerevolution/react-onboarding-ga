import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { TmdbApiClient } from '@services'
import { Constants } from '@utils'

const DetailsPage = function () {
  const [data, setData] = useState(null)
  const params = useParams()

  useEffect(() => {
    TmdbApiClient.fetchMovieDetails(params.id).then((data) => {
      setData(data)
    })
  }, [])

  return (
    <>
      {data && (
        <Stack direction="row">
          <img
            className="width-300"
            src={`${Constants.IMAGE_API_ENDPOINT}${data.poster_path}`}
            alt={`poster of ${data.title}`}
          />
          <div className="m-30">
            <Stack direction="row" alignItems="center">
              <Typography className="italic-title" variant="h2">
                {data.title}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginLeft: '50px' }}
              >
                <Typography variant="h4">
                  {Math.round(data.vote_average * 10) / 10}
                </Typography>
                <StarIcon sx={{ color: 'yellow' }} />
              </Stack>
            </Stack>
            <Typography variant="subtitle1" sx={{ color: 'gray' }}>
              {new Date(data.release_date).getFullYear()}
            </Typography>
            <Typography
              className="width-70p"
              variant="body1"
              sx={{ marginTop: '20px' }}
            >
              {data.overview}
            </Typography>
            <Stack direction="row" sx={{ marginTop: '20px' }}>
              <Typography
                className="gray"
                variant="subtitle1"
                sx={{ marginRight: '20px' }}
              >
                Genre
              </Typography>
              <Typography variant="subtitle1">
                {data.genres.map((item) => item.name).join(', ')}
              </Typography>
            </Stack>
          </div>
        </Stack>
      )}
    </>
  )
}

export default DetailsPage
