import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Contact from "./routes/contact"
import ErrorPage from "./error-page"
import Root, { loader as rootLoader } from "./routes/root"
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [{ path: "/contacts/:contactId", element: <Contact /> }],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
