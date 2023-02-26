import React from 'react'
import Cart from "../pages/CART/Cart"
import {Routes,Route} from "react-router-dom"
import Checkout from '../pages/CHECKOUT/Checkout'
import { Home } from '../pages/Home/Home'

import BirthdayCake from '../pages/BirthdayCake/ProductPage'
import Sympathy from '../pages/Sympathy/ProductPage'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import Main from '../pages/CHECKOUT/Main'
import Flower from '../pages/Occasion/ProductPage'
import SingleFlower from '../pages/Occasion/SingleProductPage'
import SingleCake from '../pages/BirthdayCake/SingleProductPage'
import SinglePlant from '../pages/Sympathy/SingleProductPage'

import Admin from '../pages/AdminPage/Admin'

import Payment from '../pages/PAYMENT/Payment'



const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/birthday' element={<Birthday />}/>
          <Route path='/birthday/:id' element={<SingleProductPage />}/>
          <Route path='/sympathy' element={<Sympathy />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/singleproductpage' element={<SingleProductPage/>}/>
          <Route path='/birthdaycake' element={<BirthdayCake/>}/>
          <Route path='/checkout' element={<Main/>}/>
          

          <Route path="/admin" element={<Admin/>}/>

          <Route path='/payment' element={<Payment/>}/>
          


        </Routes>
    </div>
  )
}

export default Allroutes