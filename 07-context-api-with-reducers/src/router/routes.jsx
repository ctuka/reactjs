import {  createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthProvider from "../providers/AuthProvider";
import LoginPage from "../pages/auth/LoginPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
        ],
    },
]); 