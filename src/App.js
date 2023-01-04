import React from 'react'
import { 
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  const user = false;

  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:category" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/login" exact element={user ? <Login /> : <Home />} />
        <Route path="/register" exact element={<Register />} />
      </Switch>
    </Router>
  )
}

export default App

