




import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../page/Home/Home/Home";





export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home> ,
      children: [
        {path:'/home',element: <Home></Home>},
      ]
    },
  ]);
  