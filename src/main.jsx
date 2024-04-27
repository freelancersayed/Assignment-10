import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './componnent/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './componnent/Authprovider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={Router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
