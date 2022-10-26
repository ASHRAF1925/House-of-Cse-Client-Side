import { createBrowserHistory } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import FAQS from "../Pages/FAQS/FAQS";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", loader:  async()=>{
        return fetch('http://localhost:5000/courses_details');
      } ,element: <Home></Home> },
      { path: "/Courses", element: <Courses></Courses> },
      { path: "/Blogs", element: <Blogs></Blogs> },
      { path: "/FAQS", element: <FAQS></FAQS> },
     
    ],
  },
  {
     path: "*", element: <Home></Home> ,
  }
]);
