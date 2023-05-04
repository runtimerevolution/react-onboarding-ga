import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { LibraryApiClient } from '@services'

const LibraryPage = function () {
  const [res, setRes] = useState()

  useEffect(() => {
    // LibraryApiClient.createAuthor({
    //   name: 'new author gonçalo',
    //   biography: 'new author bio',
    //   birth_date: '1999-02-21',
    //   nationality: 'portuguese',
    // }).then((res) => setRes(res))
  }, [])

  return (
    <>
      {res ? (
        <pre>{JSON.stringify(res, null, 2)}</pre>
      ) : (
        <div>
          <Typography variant="h4">Create an Author</Typography>
          <Form>
            <Stack spacing={5} sx={{ marginTop: '20px' }}>
              <TextField id="name-text-field" label="Name" variant="outlined" />
              <TextField
                id="biography-text-field"
                label="Biography"
                variant="outlined"
                multiline
                rows={10}
              />
              <Stack direction="row" spacing={5}>
                <TextField
                  id="nationality-text-field"
                  className="width-300"
                  label="Nationality"
                  variant="outlined"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Birth Date" />
                </LocalizationProvider>
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
          </Form>
        </div>
      )}
    </>
  )
}

export default LibraryPage
