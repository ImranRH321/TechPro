




import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../page/Home/Home/Home";
import About from "../page/About/About/About";
import Services from "../page/Services/Services";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: '/home', element: <Home></Home> },
      { path: '/about', element: <About></About> },
      { path: '/services', element: <Services></Services> },
    ]
  },
]);
