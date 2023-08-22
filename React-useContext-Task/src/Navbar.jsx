import React, { useContext } from 'react'
import {BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import {CartContext} from './Contextprovider'

function Navbar() {
  const {Cartproduct}=useContext(CartContext)
  
  return (
    <>
    <Router>
    
    <header className='header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-commerce Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className='nav-link'>
          <Link to="/">Home</Link>
            
          </a>
            
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item add">
        <Link to={"/cart"}>
        <i className="bi bi-cart-check-fill"></i>
           
Cart<span className='count'>{Cartproduct.length}</span></Link>
          
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
    </div>
    
  </div>
</nav>
    </header>
    
      <Routes>
        <Route exact path='/' Component={Home}>Home</Route>
        <Route path='/cart' Component={Cart}>Cart</Route>
      </Routes>
    </Router>
    
    
    </>
  )
}

export default Navbar