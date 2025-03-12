import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/routes";
import "bootstrap/dist/css/bootstrap.min.css";
//import "@/styles/golbal.css";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)