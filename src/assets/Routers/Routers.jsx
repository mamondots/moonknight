import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import AllBlogs from "../../Pages/AllProducts/BlogsPage/AllBlogs/AllBlogs";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/allproducts",
            element:<AllProducts></AllProducts>
        },
        {
            path: "/allblogs",
            element:<AllBlogs></AllBlogs>
        }
      ]
    },
  ]);