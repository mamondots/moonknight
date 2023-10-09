import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import AllBlogs from "../../Pages/AllProducts/BlogsPage/AllBlogs/AllBlogs";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import LogIn from "../../Pages/RegistenPage/LogIn/LogIn";
import SingUp from "../../Pages/RegistenPage/SingUp/SingUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import MyProducts from "../../Pages/MyProducts/MyProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>
      },
      {
        path: "/myproducts",
        element: <MyProducts></MyProducts>
      },
        {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>
      }

    ]
  },
]);