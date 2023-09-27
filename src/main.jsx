import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Routes/Home';
import Psicologos from './Routes/Psicologos';


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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
