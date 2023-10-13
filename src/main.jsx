import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Routes/Home';
import Psicologos from './Routes/Psicologos';
import Login from './Routes/Login';
import Registro from './Routes/Registro';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />, 
    children: [
      { 
        path: '/',
        element: <Home />
      },
      {  
        path: '/Psicologos',
        element: <Psicologos />
      },
      {  
        path: '/Login',
        element: <Login />
      },
      {  
        path: '/Registro',
        element: <Registro />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
