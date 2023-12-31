import Demo from "@/views/demo"
import React from "react"
import { Navigate } from "react-router-dom"

import Home from "@/views/home"
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path:"/",
    element:<Navigate to="/home" />
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/entrie',
    element:<Entire/>
  },
  {
    path:'/detail',
    element:<Detail/>
  },
  {
    path:'/demo',
    element:<Demo/>
  }
]

export default routes