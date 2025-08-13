import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import ProtectedRoute from "./ProtectedRoute";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import { AuthPage } from "../pages/Auth";
import { MainPage } from "../pages/Main";
import { CartPage } from "../pages/Cart";
import { RegisterPage } from "../pages/Register";

const routes: RouteObject[] = [
    {
        path: '/login', element: <LoginLayout />, children: [
            { path: 'auth', element: <AuthPage />, },
            { path: 'register', element: <RegisterPage />, },
        ]
    },
    {
        path: '/', element: <ProtectedRoute element={<MainLayout />} />, children: [
            { path: 'menu', element: <MainPage />, },
            { path: 'cart', element: <CartPage />, },
        ]
    },
];

const router = createBrowserRouter(
    [
        {
            element: <BaseLayout />,
            children: routes,
            errorElement: <h1>Ошибка...</h1>
        }
    ]
);

export default router;