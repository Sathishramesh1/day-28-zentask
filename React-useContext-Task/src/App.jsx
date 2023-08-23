
import { CartProvider } from './Contextprovider'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  

  return (
    <div className='home '>
    <CartProvider>
      <Navbar>
      
      <Home/>
      
      </Navbar>
      
      </CartProvider>
      </div>
  )
}

export default App
