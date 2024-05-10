import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/RegLog/Login";
import Register from "../Pages/RegLog/Register";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
