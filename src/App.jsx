import React from 'react'
import Layout from './components/Layout/Layout'
import Landing from './page/LandingPage/Landing'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Landing/>
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
