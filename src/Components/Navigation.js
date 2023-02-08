import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import ErrorPage from "./Erreur";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



export const router = createBrowserRouter([
 {
  path: "/",
  element: <Home />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/Tâche à faire",
  element: <Contact />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/Tâche en cours",
  element: <Login />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/Tâche terminées",
  element: <Login />,
  errorElement: <ErrorPage />,
 },
]);