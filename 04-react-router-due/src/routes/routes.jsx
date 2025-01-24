import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import Register from "@/pages/auth/Register";
import Login from "../pages/auth/Login";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);