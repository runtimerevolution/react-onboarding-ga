import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TmdbApiClient } from '@services'
import { Constants } from '@utils'

const SearchResultsPage = function () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const nrImagesLoaded = useRef(0)
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('query')

  const onCompleteImg = function () {
    nrImagesLoaded.current++
    if (nrImagesLoaded.current === data.length) {
      setLoading(false)
    }
  }

  useEffect(() => {
    TmdbApiClient.search(queryParam)
      .then((data) => {
        setData(data)
        if (data.length === 0) {
          setLoading(false)
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [])

  return (
    <>
      {loading ? (
        <span>loading...</span>
      ) : (
        data.length === 0 && <span>No results found.</span>
      )}
      <div
        className="search-results-container"
        style={{ display: loading ? 'none' : 'flex' }}
      >
        {data.map((item) => (
          <img
            key={item.id}
            className="search-result-img"
            src={`${Constants.IMAGE_API_ENDPOINT}${item.poster_path}`}
            alt={`search result ${item.title || item.name}`}
            onLoad={onCompleteImg}
            onError={onCompleteImg}
          />
        ))}
      </div>
    </>
  )
}

export default SearchResultsPage
