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
import NotFound from './share/NotFound'
import CustomerProtected from './share/protected/CustomerProtected'
import AdminProtected from './share/protected/Adminprotected'
import AdminProfile from './pages/admin/AdminProfile'
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/shop' element={<Layout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='details' element={<Details />} />
          <Route path='/user' element={<CustomerProtected compo={<Profile />} />} >
            <Route path='orderhistory' element={<OrderHistory />} />
            <Route path='orderSuccess' element={<OrderSuccess />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='cart' element={<Cart />} />
          </Route>

          <Route path='admin' element={<AdminProtected compo={<AdminProfile />} />} >

          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App