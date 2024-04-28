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
import Painting from './Component/Painting/Painting';
import AddPainting from './Component/AddPainting/AddPainting';
import UpdatePainting from './Component/UpdatePainting/UpdatePainting';
import MyPainting from './Component/MyPainting/MyPainting';


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
        },
        {
          path: '/painting',
          element: <Painting></Painting>,
          loader: () => fetch('http://localhost:5001/painting')
        },
        {
          path: '/addPainting',
          element: <AddPainting> </AddPainting>
        },
        {
          path: '/myPainting/updatePainting/:id',
          element: <UpdatePainting></UpdatePainting>,
          loader: ({params}) => fetch(`http://localhost:5001/painting/${params.id}`)
        },

        {
          path: '/myPainting',
          element: <MyPainting></MyPainting>,
          loader: () => fetch('http://localhost:5001/painting')
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
);
