import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome/AdminHome";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import UserReview from "../Pages/Dashboard/UserReview/UserReview";
import Details from "../Pages/Details/Details";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/:menuID",
        element: <Details />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "addItem",
        element: <AddItem />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "manageItem",
        element: <ManageItem />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "userReview",
        element: <UserReview />,
      },
    ],
  },
]);
