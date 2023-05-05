import axios from 'axios'
import { Constants } from '@utils'

const libraryInstance = axios.create({ baseURL: Constants.LIBRARY_ENDPOINT })

const LibraryApiClient = {
  createAuthor: function (authorData) {
    return libraryInstance
      .post('/library-api/authors/', authorData, {
        auth: {
          username: Constants.LIBRARY_USER,
          password: Constants.LIBRARY_SECRET,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          return res
        }
        throw res
      })
      .catch((error) => {
        return error
      })
  },
}

export default LibraryApiClient
