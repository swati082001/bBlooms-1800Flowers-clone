import React from 'react'
import Cart from "../pages/CART/Cart"
import {Routes,Route} from "react-router-dom"
import Checkout from '../pages/CHECKOUT/Checkout'
import { Home } from '../pages/Home/Home'
import Birthday from '../pages/Birthday/ProductPage'
import SingleProductPage from '../pages/Birthday/SingleProductPage'
import BirthdayCake from '../pages/BirthdayCake/ProductPage'
import SingleCake from '../pages/BirthdayCake/SingleProductPage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/birthday' element={<Birthday />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/singleproductpage' element={<SingleProductPage/>}/>
          <Route path='/birthdaycake' element={<BirthdayCake/>}/>
          <Route path='/singlecake' element={<SingleCake/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes