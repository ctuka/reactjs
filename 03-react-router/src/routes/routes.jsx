import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/routes/root-layout";
import ErrorPage from "@/error-page";
import Contact from "@/routes/contact";
import { rootLoader } from "@/api/root-loader";
import { createContactAction } from "@/actions/create-contact-action";
import { contactLoader } from "@/actions/contact-loader";
import EditContact from "./edit-contact";


// createsBrowserRouter acts like App.jsx
export const router = createBrowserRouter([
    {
        //url
        path: "/",
        // jsx file that will be seen
        element: <RootLayout />,
        // error page - ptional
        errorElement: <ErrorPage />,
        // fetch data with loader
        loader: rootLoader,
        // action
        action: createContactAction,
        // chieldren
        children: [
            {
                path: "/contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: "/contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
            },
        ],
    },
]);
