import './App.css'
import CheckoutProvider from './contexts/CheckoutContext'
import HomePage from './pages/Home'

function App() {
  return (
    <CheckoutProvider>
      <HomePage />
    </CheckoutProvider>
  )
}

export default App
