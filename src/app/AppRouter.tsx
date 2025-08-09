import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout";
import { AuthPage } from "../pages/Auth";
import { MainPage } from "../pages/Main";
import { ErrorPage } from "../pages/Error/";
import ProtectedRoute from "./ProtectedRoute";
import LoginLayout from "./Layouts/LoginLayout";
import MainLayout from "./Layouts/MainLayout";
import { CartPage } from "../pages/Cart";
import { RegisterPage } from "../pages/Register";

const routes: RouteObject[] = [
  {
    path: "/login", element: <LoginLayout />, children: [
      { path: "auth", element: <AuthPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute element={<MainLayout />} />,
    children: [
      { path: "menu", element: <MainPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

export default router;
