import React from 'react'
import Cart from "../pages/CART/Cart"
import {Routes,Route} from "react-router-dom"
import Checkout from '../pages/CHECKOUT/Checkout'
import { Home } from '../pages/Home/Home'
import Birthday from '../pages/Birthday/ProductPage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/birthday' element={<Birthday />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          
        </Routes>
    </div>
  )
}

export default Allroutes