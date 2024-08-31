import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.jsx';
import Search from './pages/search.jsx';
import Details from './pages/details.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
