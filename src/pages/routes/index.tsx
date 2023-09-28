import React from "react"
import ReactDOM from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../inicio"
import NotFound from "../not-found"
import Sobre from "../sobre"

const router = createBrowserRouter([
  {path:'/', element: <Home/>, errorElement:<NotFound />},
  {path: '/sobre', element: <Sobre/> },
  {path: '/produtos', element: <Produtos/> },
  ])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

export default router
