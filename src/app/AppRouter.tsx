import { createBrowserRouter, type RouteObject } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout";
import { AuthPage } from "../pages/Auth";
import { MainPage } from "../pages/Main";
import { ErrorPage } from "../pages/Error/";

const routes: RouteObject[] = [
  { path: "/", element: <AuthPage /> },
  { path: "/main", element: <MainPage /> },
  { path: "/error", element: <ErrorPage /> },
];

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: routes,
    errorElement: <ErrorPage/>,
  },
]);

export default router;
