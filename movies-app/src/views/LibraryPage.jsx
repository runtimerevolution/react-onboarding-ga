import { Form } from 'react-router-dom'
import { Stack, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const LibraryPage = function () {
  return (
    <>
      <Typography variant="h2">Create an Author</Typography>
      <Form>
        <Stack spacing={5} sx={{ marginTop: '10px' }}>
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
      </Form>
    </>
  )
}

export default LibraryPage
