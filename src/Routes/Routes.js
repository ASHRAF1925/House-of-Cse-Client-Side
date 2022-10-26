
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import Courses_list from "../Pages/Courses/Courses_list/Courses_list";
import FAQS from "../Pages/FAQS/FAQS";
import Home from "../Pages/Home/Home";
import Course_details from "../Pages/Shared/Course_details/Course_details";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("http://localhost:5000/courses_details");
        },
        element: <Home></Home>,
      },
      {
        path: "/Courses",
        loader: () => {
          return fetch("http://localhost:5000/courses_details");
        },
        element: <Courses></Courses>,
        children: [
          {
            path: "/Courses",
            loader: () => {
              return fetch("http://localhost:5000/courses_details");
            },

            element: <Courses_list></Courses_list>,
          },
          {
            path:'/Courses/:id',
            loader: () => {
              return fetch("http://localhost:5000/courses_details");
            },
            element:<Course_details></Course_details>
          }
      
        ],
      },
      { path: "/Blogs", element: <Blogs></Blogs> },
      { path: "/FAQS", element: <FAQS></FAQS> },
  
    ],
  },
  {
    path: "*",
    element: <Home></Home>,
  },
]);
