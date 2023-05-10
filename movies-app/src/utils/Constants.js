const Constants = {
  PROD: import.meta.env.VITE_PROD === 'true',
  API_KEY: import.meta.env.VITE_TMDB_KEY,
  TMDB_ENDPOINT: import.meta.env.VITE_TMDB_ENDPOINT,
  IMAGE_API_ENDPOINT: import.meta.env.VITE_IMAGE_API_ENDPOINT,
  LIBRARY_ENDPOINT: import.meta.env.VITE_LIBRARY_ENDPOINT,
  LIBRARY_USER: import.meta.env.VITE_LIBRARY_USER,
  LIBRARY_SECRET: import.meta.env.VITE_LIBRARY_SECRET,
}

export default Constants
