import {createBrowserRouter} from 'react-router-dom'

import AdminPage from './pages/admin'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import NetworksPage from './pages/networks'
 

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
    element: <AdminPage/>
  },
  {
    path: "/networks",
    element: <NetworksPage/>
  }
])

export {router}