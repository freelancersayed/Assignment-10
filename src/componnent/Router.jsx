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
import UserFeedback from "./TourisFeedback";
import PrivetRout from "./PrivetRout/PrivetRout";
import Profile from "./PrivetRout/Profile";
import AddSpot from "./AddSpot";
import SpotDetails from "./SpotDetails";
import Update from "./Update";
import Category from "./Category";
// import Naviget from "./Naviget";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://tour-of-south-asia-server.vercel.app/addspot')
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
          loader: ()=> fetch('https://tour-of-south-asia-server.vercel.app/addspot')
        },
        {
          path: '/myList/',
          element:<PrivetRout> <MyLIst></MyLIst></PrivetRout>,
        },
        {
          path: '/feedback',
          element: <UserFeedback></UserFeedback>,
          loader: ()=> fetch('https://tour-of-south-asia-server.vercel.app/user')
        },
        {
          path: '/profile',
          element: <PrivetRout><Profile></Profile></PrivetRout>
        },
        {
          path: '/addspot',
          element:<PrivetRout><AddSpot></AddSpot></PrivetRout>
        },
        {
          path: '/details/:_id',
          element: <PrivetRout><SpotDetails></SpotDetails></PrivetRout>,
          loader: ()=> fetch('https://tour-of-south-asia-server.vercel.app/addspot')
        },
        {
          path: '/update/:id',
          element: <PrivetRout><Update></Update></PrivetRout>,
          loader: ({params}) => fetch(`https://tour-of-south-asia-server.vercel.app/addspot/${params.id}`)
        },
        {
          path: '/category',
          element: <Category></Category>,
          loader: ()=> fetch('https://tour-of-south-asia-server.vercel.app/addspot')
        },
        // {
        //   path: '/naviget/:countryName',
        //   element: <Naviget></Naviget>,
        //   loader: ({params})=> fetch(`https://tour-of-south-asia-server.vercel.app/addspot/${params.}`)
        // }
     
      ]
    },
  ]);


  export default Router