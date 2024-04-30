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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Animaction from './Component/Animaction/Animaction';
import ErrorPage from './Component/ErrorPgae/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('http://localhost:5001/painting')
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
          element: <PrivateRoute><AddPainting> </AddPainting></PrivateRoute>
        },
        {
          path: '/myPainting/updatePainting/:id',
          element: <PrivateRoute><UpdatePainting></UpdatePainting></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5001/painting/${params.id}`)
        },

        {
          path: '/myPainting',
          element: <PrivateRoute><MyPainting></MyPainting></PrivateRoute>,
          loader: () => fetch('http://localhost:5001/painting')
        },{
          path: 'animaction',
          element: <Animaction></Animaction>
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
