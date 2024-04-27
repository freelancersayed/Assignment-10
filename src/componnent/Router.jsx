import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Logins from "./Logins";
import Register from "./Register";
import ErrorPage from "./ErrorPage";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Logins></Logins>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);


  export default Router