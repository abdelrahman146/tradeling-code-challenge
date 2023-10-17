import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Product from './Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:id",
    element: <Product/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
