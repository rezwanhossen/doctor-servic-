import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Error from "../Pages/Error";
import Login from "../Pages/RegLog/Login";
import Register from "../Pages/RegLog/Register";
import AddService from "../Pages/SurvicesPag/AddService";
import ManagService from "../Pages/SurvicesPag/ManagService";
import UpdateService from "../Pages/SurvicesPag/UpdateService";
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
      {
        path: "/addsurvice",
        element: <AddService></AddService>,
      },
      {
        path: "/updateServic",
        element: <UpdateService></UpdateService>,
      },
      {
        path: "/managservic",
        element: <ManagService></ManagService>,
      },
    ],
  },
]);

export default router;
