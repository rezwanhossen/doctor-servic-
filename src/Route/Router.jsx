import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Error from "../Pages/Error";
import Login from "../Pages/RegLog/Login";
import Register from "../Pages/RegLog/Register";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
