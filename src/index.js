import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: < LandingPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/home",
    element: < Home/>,
    errorElement: <h1>Sorry</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
