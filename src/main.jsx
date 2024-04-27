import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home/Home';
import Root from './Component/Root/Root';
import Login from './Component/LOgin/Login';
import Registration from './Component/Registration/Registration';
import AuthProvider from './Component/Providers/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>,
        },
        {
          path: '/rg',
          element:<Registration></Registration>,
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
