import React from "react"
import ReactDOM from "react-dom/client"
import {
    Route,
    RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,
} from "react-router-dom"

import Contact, {
    loader as contactLoader,
    action as contactAction,
} from "./routes/contact"
import { action as destroyAction } from "./routes/destroy"
import EditContact, { action as editAction } from "./routes/edit"
import ErrorPage from "./error-page"
import Index from "./routes/index"
import Root, { loader as rootLoader, action as rootAction } from "./routes/root"
import "./index.css"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
            loader={rootLoader}
            action={rootAction}
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Index />} />
                <Route
                    path="contacts/:contactId"
                    element={<Contact />}
                    loader={contactLoader}
                    action={contactAction}
                />
                <Route
                    path="contacts/:contactId/edit"
                    element={<EditContact />}
                    loader={contactLoader}
                    action={editAction}
                />
                <Route
                    path="contacts/:contactId/destroy"
                    action={destroyAction}
                />
            </Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
