import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout.jsx";
import CategoryNews from "./Pages/CategoryNews.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({params})=>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
      {
        path: "",
        element: <Navigate to="/category/01" replace />,
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>

      },
      {
        path: '/auth/register',
        element: <Register></Register>

      }
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
