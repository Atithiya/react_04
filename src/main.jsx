import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import Owner from './Owner';
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin';
import './index.css'
import ButtonClick from './ButtonClick';
import axios from 'axios';

const routes = createBrowserRouter ([
  {
    path : '/',
    element : <>
      <Home />
    </>
  },
  {
    path : '/Navbar',
    element : <>
      <Navbar />
    </>
  },
  {
    path : '/Owner',
    element : <>
      <Owner />
    </>
  },
  {
    path : '/HomeUser',
    element : <>
      <HomeUser/>
    </>
  },
  {
    path : '/HomeAdmin',
    element : <>
      <HomeAdmin/>
    </>
  },
  {
    path : '/ButtonClick',
    element : <>
      <ButtonClick />
    </>
  }
])

  


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
