import {createBrowserRouter} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ContextApi from "@/pages/ContextApi";
import ThemeProvider from "../providers/ThemeProvider";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ThemeProvider />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/context-api",
                element: <ContextApi />
            }
        ]


    }
])