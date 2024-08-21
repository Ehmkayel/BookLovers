import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Landing from './page/LandingPage/Landing';
import OrderNow from './page/OrderNow/OrderNow';
import Confirmation from './page/OrderNow/Confirmation';
import { WishlistProvider } from '../src/Utilities/WishListContext'
import Wishlist from './page/Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/order',
        element: <OrderNow />
      },
      {
        path: '/confirmation',
        element: <Confirmation />
      },
      {
        path: '/wishlist',
        element: <Wishlist/>
      }
    ]
  }
]);

export default function App() {
  return (
    <React.StrictMode>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </React.StrictMode>
  );
}
