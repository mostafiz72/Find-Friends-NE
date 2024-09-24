import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx';
import LoginPage from './LoginPage.jsx';
import Screen from './Screen.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Register from './Register.jsx';
import HomePage from './HomePage.jsx';
import CheckBoxPage from './CheckBoxPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Screen /> },
      { path: "*", element: <ErrorPage /> },    
    ],
  },
  {
    path: "/contact",
    element: <CheckBoxPage />,
  },
  
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <Register /> },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
