import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import Home from './routes/Home/Home.jsx'
import News from './routes/News/News.jsx'
import Store from './routes/Store/Store.jsx'
import Message from './routes/Message/Message.jsx'
import Sac from './routes/Sac/Sac.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/noticias", element: <News/>},
      {path: "/loja", element: <Store/>},
      {path: "/mensagem", element: <Message/>},
      {path: "/sac", element: <Sac/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)