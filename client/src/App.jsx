import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OrderHistory from './components/OrderHistory'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Layout from './pages/Layout'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Details from './components/Details'
import OrderSuccess from './components/OrderSuccess'
import Profile from './components/Profile'
import Login from './components/Login'
import { Toaster } from 'sonner'
import Contact from './components/Contact'
// import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/details' element={<Details />} />
          <Route path='/shop' element={<Layout />} />
          <Route path='/orderhistory' element={<OrderHistory />} />
          <Route path='/orderSuccess' element={<OrderSuccess />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App