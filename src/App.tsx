import {createBrowserRouter} from 'react-router-dom'

import AdminPage from './pages/admin'
import ErrorPage from './pages/error/error'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import NetworksPage from './pages/networks'
import { PrivateRoute } from './routes/private'
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/admin",
    element: <PrivateRoute><AdminPage/></PrivateRoute>
  },
  {
    path: "/admin/networks",
    element: <PrivateRoute><NetworksPage/></PrivateRoute>
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
])

export {router}