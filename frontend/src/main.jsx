import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import PageOneCar from "./pages/PageOneCar";
import App from "./App";
import PageOneMoto from "./pages/PageOneMoto";
import CarCar from "./components/CarCar";
import MotoMoto from "./components/MotoMoto";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PageOneFomMoto from "./pages/PageOneFomMoto";
import PageOneFormCar from "./pages/PageOneFormCar";
import PageSelec from "./pages/PageSelec";
import Layout from "./components/Layout";
import PageHome from "./pages/PageHome";
import LayoutDeconnect from "./components/LayoutDeconnect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <PageHome />,
      },
      {
        path: "/Signin",
        element: <Signin />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        element: <LayoutDeconnect />,
        children: [
          {
            path: "/selec",
            element: <PageSelec />,
          },
          {
            path: "/motos/formulaire",
            element: <PageOneFomMoto />,
          },
          {
            path: "/cars/formulaire",
            element: <PageOneFormCar />,
          },
          {
            path: "/cars",
            element: <CarCar />,
            loader: () => {
              return connexion
                .get("/cars")
                .then((res) => res.data)
                .catch((err) => console.error(err));
            },
          },
          {
            path: "/cars/:id",
            element: <PageOneCar />,
            loader: ({ params }) => {
              return connexion
                .get(`cars/${params.id}`)
                .then((res) => res.data)
                .catch((err) => console.error(err));
            },
          },
          {
            path: "/motos",
            element: <MotoMoto />,
            loader: () => {
              return connexion
                .get("/motos")
                .then((res) => res.data)
                .catch((err) => console.error(err));
            },
          },
          {
            path: "/motos/:id",
            element: <PageOneMoto />,
            loader: ({ params }) => {
              return connexion
                .get(`motos/${params.id}`)
                .then((res) => res.data)
                .catch((err) => console.error(err));
            },
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
