import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/routes/root-layout";
import ErrorPage from "@/error-page";
import Contact from "@/routes/contact";
import { rootLoader } from "@/api/root-loader";
import { createContactAction } from "@/actions/create-contact-action";
import { contactLoader } from "@/actions/contact-loader";
import EditContact from "./edit-contact";
import { updateContactAction } from "@/actions/update-contact-action"
import { destroyContactAction } from "@/actions/destroy-contact-action";


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
            // {
                //If the index is true it above pat at parent of child it will show the following element 
                //If the index is true you could not have chieldren
            //     index: true,
            //     element: <>Index: True</>
            // },
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: updateContactAction,
            },
            {
                path: "contacts/:contactId/destroy",
                action: destroyContactAction,
            },
        ],
    },
]);
