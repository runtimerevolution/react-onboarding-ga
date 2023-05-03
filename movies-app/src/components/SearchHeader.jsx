import { Button, TextField } from '@mui/material'
import { Form } from 'react-router-dom'

const SearchField = function () {
  return (
    <Form className="search-container" action="/search">
      <TextField
        id="search-query"
        name="query"
        label="Movies"
        variant="outlined"
      />
      <div className="search-btn-container">
        <Button type="submit" variant="contained">
          Search
        </Button>
      </div>
    </Form>
  )
}

export default SearchField
