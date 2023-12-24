




import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../page/Home/Home/Home";
import About from "../page/About/About/About";
import Services from "../page/Services/Services";
import ServiceDetails from "../page/ServiceDetails/ServiceDetails";
import ConactUs from "../page/ConactUs/ConactUs";
import Blogs from "../page/Blogs/Blogs";
import BlogDetails from "../page/Blogs/BlogDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: '/home', element: <Home></Home> },
      { path: '/about', element: <About></About> },
      { path: '/services', element: <Services></Services> },
      { path: '/servicesDetails', element: <ServiceDetails></ServiceDetails> },
      { path: '/blogs', element: <Blogs></Blogs> },
      { path: '/blogDetail', element: <BlogDetails></BlogDetails> },
      { path: '/contact', element: <ConactUs></ConactUs> },
    ]
  },
]);
