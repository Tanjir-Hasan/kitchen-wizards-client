import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './components/Home/Home/Home';
import ChefDetails from './components/Shared/ChefDetails/ChefDetails';
import Login from './components/Shared/Login/Login/Login';
import Register from './components/Shared/Login/Register/Register';
import AuthProvider from './components/providers/AuthProvider';
import PrivateRoutes from './components/routes/PrivateRoutes';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/Shared/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "data/:id",
        // element: <ChefDetails></ChefDetails>,
        element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://kichen-wizards-server-tanjir-hasan.vercel.app/data/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "blog",
        element: <Blog></Blog>
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
