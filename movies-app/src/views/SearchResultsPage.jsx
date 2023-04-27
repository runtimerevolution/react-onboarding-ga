import { useSearchParams } from 'react-router-dom'

const SearchResultsPage = function () {
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('query')

  return <div>Search results for: {queryParam}</div>
}

export default SearchResultsPage
