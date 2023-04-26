import { Button, TextField } from '@mui/material'

const SearchField = function () {
  return (
    <div className="search-container">
      <TextField
        id="search-query"
        label="TV shows, movies, and people"
        variant="outlined"
      />
      <div className="search-btn-container">
        <Button variant="contained">Search</Button>
      </div>
    </div>
  )
}

export default SearchField
