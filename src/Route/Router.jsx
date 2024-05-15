import { createBrowserRouter } from "react-router-dom";
import PrivetRout from "../Components/Firbase/PrivetRout";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import BookNow from "../Pages/BookNow";
import Error from "../Pages/Error";
import Login from "../Pages/RegLog/Login";
import Register from "../Pages/RegLog/Register";
import SinglePage from "../Pages/SinglePage";
import AddService from "../Pages/SurvicesPag/AddService";
import BookedServic from "../Pages/SurvicesPag/BookedServic";
import ManagService from "../Pages/SurvicesPag/ManagService";
import ToDoServic from "../Pages/SurvicesPag/ToDoServic";
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
        element: (
          <PrivetRout>
            <AddService></AddService>
          </PrivetRout>
        ),
      },
      {
        path: "/updateServic/:id",
        element: (
          <PrivetRout>
            {" "}
            <UpdateService></UpdateService>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctor-servic-server.vercel.app/singleservic/${params.id}`
          ),
      },

      {
        path: "/managservic",
        element: (
          <PrivetRout>
            <ManagService></ManagService>
          </PrivetRout>
        ),
      },
      {
        path: "/simglepag/:id",
        element: (
          <PrivetRout>
            <SinglePage></SinglePage>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctor-servic-server.vercel.app/singleservic/${params.id}`
          ),
      },
      {
        path: "/booknow/:id",
        element: (
          <PrivetRout>
            <BookNow></BookNow>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctor-servic-server.vercel.app/singleservic/${params.id}`
          ),
      },
      {
        path: "/bookservic",
        element: (
          <PrivetRout>
            <BookedServic></BookedServic>
          </PrivetRout>
        ),
      },
      {
        path: "/todoservic",
        element: (
          <PrivetRout>
            <ToDoServic></ToDoServic>
          </PrivetRout>
        ),
      },
    ],
  },
]);

export default router;
