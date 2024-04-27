import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Logins from "./Logins";
import Register from "./Register";
import ErrorPage from "./ErrorPage";
import AllTouristSpot from "./AllTouristSpot";
import MyLIst from "./MyLIst";
import TourisFeedback from "./TourisFeedback";
import PrivetRout from "./PrivetRout/PrivetRout";
import Profile from "./PrivetRout/Profile";
import AddSpot from "./AddSpot";
import SpotDetails from "./SpotDetails";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/addspot')
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
          path: '/spot',
          element: <AllTouristSpot></AllTouristSpot>,
          loader: ()=> fetch('http://localhost:5000/addspot')
        },
        {
          path: '/mylist/:email',
          element: <MyLIst></MyLIst>,
          loader: ()=>fetch('http://localhost:5000/addspot')
        },
        {
          path: '/feedback',
          element: <TourisFeedback></TourisFeedback>
        },
        {
          path: '/profile',
          element: <PrivetRout><Profile></Profile></PrivetRout>
        },
        {
          path: '/addspot',
          element:<AddSpot></AddSpot>
        },
        {
          path: '/details/:_id',
          element: <PrivetRout><SpotDetails></SpotDetails></PrivetRout>,
          loader: ()=> fetch('http://localhost:5000/addspot')
        },
     
      ]
    },
  ]);


  export default Router