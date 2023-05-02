import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root, SearchResultsPage, TrendingMoviesPage } from '@views'
import './index.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <TrendingMoviesPage />,
      },
      {
        path: '/search',
        element: <SearchResultsPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
