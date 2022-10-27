
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/404/404Page";
import Blogs from "../Pages/Blogs/Blogs";
import Checkout from "../Pages/Checkout/Checkout";
import Courses from "../Pages/Courses/Courses";
import Courses_list from "../Pages/Courses/Courses_list/Courses_list";
import FAQS from "../Pages/FAQS/FAQS";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Course_details from "../Pages/Shared/Course_details/Course_details";
import PrivateRoute from "./PrivateRoute";

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
            loader: ({params}) => {
              return fetch(`http://localhost:5000/course/${params.id}`);
            },
            element:<Course_details></Course_details>
          }
      
        ],
      },
      { path: "/Blogs", element: <Blogs></Blogs> },
      { path: "/FAQS", element: <FAQS></FAQS> },
      {path:"/login",element:<Login></Login>},
      {path:"/register",element:<Register></Register>},
      {path:'/checkout/:id',
      loader: ({params}) => {
        console.log(params.id)
              return fetch(`http://localhost:5000/course/${params.id}`);
            },
    element:<PrivateRoute> <Checkout></Checkout> </PrivateRoute>}
  
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
