import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import StyledToggleButton from './StyledToggleButton'

const TrendingHeader = function ({ timeWindow, updateTimeWindow }) {
  return (
    <>
      <h2>TMDB Top 10</h2>
      <ToggleButtonGroup
        value={timeWindow}
        exclusive
        onChange={updateTimeWindow}
        aria-label="trending time window"
      >
        <StyledToggleButton value="day" aria-label="day">
          day
        </StyledToggleButton>
        <StyledToggleButton value="week" aria-label="week">
          week
        </StyledToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default TrendingHeader
