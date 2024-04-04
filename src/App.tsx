import './App.css'
import CheckoutProvider from './contexts/CheckoutContext'
import HomePage from './pages/Home'
import InvoicePage from './pages/Invoice'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from 'react-router-dom'

const router: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/invoice',
    element: <InvoicePage />
  }
]

function App() {
  return (
    <CheckoutProvider>
      <RouterProvider router={createBrowserRouter(router)} />
    </CheckoutProvider>
  )
}

export default App
