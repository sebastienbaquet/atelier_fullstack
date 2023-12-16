import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOneCar from "./pages/PageOneCar";
import App from "./App";
import PageOneMoto from "./pages/PageOneMoto";
import CarCar from "./components/CarCar";
import MotoMoto from "./components/MotoMoto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cars",
    element: <CarCar />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/cars`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/cars/:id",
    element: <PageOneCar />,
    loader: ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/cars/${params.id}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },

  {
    path: "/motos",
    element: <MotoMoto />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/motos`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/motos/:id",
    element: <PageOneMoto />,
    loader: ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/motos/${params.id}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
