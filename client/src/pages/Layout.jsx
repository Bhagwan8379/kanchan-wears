import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import OrderHistory from '../components/OrderHistory'
import Products from './Products'
import Home from './Home'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-10'>
                <Home />
            </div>
            {/* <OrderHistory /> */}
        </div>
    )
}

export default Layout