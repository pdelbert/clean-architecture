import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'
import {router, RouterProvider} from "./routes";
import NavigationContainer from './lib/Navigation/presentation/NavigationContainer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavigationContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
