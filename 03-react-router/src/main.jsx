import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {router} from "@/routes/routes";
import "@/styles/index.css";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root />,
//     },
//     {
//         path: "/contacts/1",
//         element: <FormikYup3 />,
//     },
// ]);

const root = createRoot(document.getElementById("root"));
    root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
