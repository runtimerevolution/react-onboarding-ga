import StarIcon from '@mui/icons-material/Star'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
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
        <Stack direction={isMobile ? 'column' : 'row'} justifyContent="center">
          <img
            style={{ width: isMobile ? '80vw' : '300px' }}
            src={`${Constants.IMAGE_API_ENDPOINT}${data.poster_path}`}
            alt={`poster of ${data.title}`}
          />
          <div style={{ marginLeft: !isMobile ? '50px' : 0 }}>
            <Stack
              direction={isMobile ? 'column' : 'row'}
              alignItems={isMobile ? 'left' : 'center'}
              mt={2}
              mb={2}
            >
              <Typography className="italic-title" variant="h4">
                {data.title}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginLeft: isMobile ? 0 : '50px' }}
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
              variant="body1"
              sx={{ marginTop: '20px', width: isMobile ? '90%' : '70%' }}
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
              <Stack direction="row" flexWrap="wrap">
                {data.genres.map((item) => (
                  <Typography
                    key={item.name}
                    sx={{ paddingRight: 1 }}
                    variant="subtitle1"
                  >
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </div>
        </Stack>
      )}
    </>
  )
}

export default DetailsPage
