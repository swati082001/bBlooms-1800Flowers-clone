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


const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>

          <Route path='/flower' element={<Flower />}/>
          <Route path='/flower/:id' element={<SingleFlower/>}/>

        <Route path='/sympathy' element={<Sympathy/>}/>
        <Route path='/sympathy/:id' element={<SinglePlant/>}/>
          <Route path='/birthdaycake' element={<BirthdayCake/>}/>
          <Route path='/birthdaycake/:id' element={<SingleCake/>}/>
          

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/birthdaycake' element={<BirthdayCake/>}/>
          <Route path='/checkout' element={<Main/>}/>
          

        </Routes>
    </div>
  )
}

export default Allroutes