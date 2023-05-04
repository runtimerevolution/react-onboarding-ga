import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { LibraryApiClient } from '@services'

const LibraryPage = function () {
  const [res, setRes] = useState()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      biography: '',
      nationality: '',
      birth_date: '',
    },
  })

  const onSubmit = function (data) {
    data.birth_date = data.birth_date.format('YYYY-MM-DD')
    LibraryApiClient.createAuthor(data).then((res) => setRes(res))
  }

  return (
    <>
      {res ? (
        <pre>{JSON.stringify(res, null, 2)}</pre>
      ) : (
        <div>
          <Typography variant="h4">Create an Author</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5} sx={{ marginTop: '20px' }}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="name-text-field"
                    label="Name"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
              <Controller
                name="biography"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="biography-text-field"
                    label="Biography"
                    variant="outlined"
                    multiline
                    rows={10}
                    {...field}
                  />
                )}
              />
              <Stack direction="row" spacing={5}>
                <Controller
                  name="nationality"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="nationality-text-field"
                      className="width-300"
                      label="Nationality"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="birth_date"
                  control={control}
                  render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker label="Birth Date" {...field} />
                    </LocalizationProvider>
                  )}
                />
              </Stack>
            </Stack>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ marginTop: '20px' }}
            >
              Create
            </Button>
          </form>
        </div>
      )}
    </>
  )
}

export default LibraryPage
