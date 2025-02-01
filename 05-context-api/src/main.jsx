import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
import {RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import {router} from "@/routes/routes"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)