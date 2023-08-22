
import { CartProvider } from './Contextprovider'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  

  return (
    <CartProvider>
      <Navbar>

      <Home/>
      </Navbar>
      
      </CartProvider>
  )
}

export default App
