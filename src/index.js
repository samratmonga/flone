import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,


} from "react-router-dom";

import Whistle from './Pages/Whistle';
// const [wishlist, setWishlist] = useState([
//   { name: 'Product 1', price: '$10' },
//   { name: 'Product 2', price: '$20' },
//   // Other wishlist items...
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='whistle' element={<Whistle/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
