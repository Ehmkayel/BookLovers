import React from 'react'
import Layout from './components/Layout/Layout'
import Landing from './page/LandingPage/Landing'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import OrderNow from './page/OrderNow/OrderNow'
import Confirmation from './page/OrderNow/Confirmation'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: '/order',
        element: <OrderNow/>
      },
      {
        path: '/confirmation',
        element: <Confirmation/>
      }
    ]
  }
])

export default function App(){
  return(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}
