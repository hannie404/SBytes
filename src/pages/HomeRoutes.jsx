import React from 'react';
import Home from '../pages/Home';
import Business from '../pages/Business';
import Cart from '../pages/Cart';
import Education from '../pages/Education';
import Profile from '../pages/Profile';
import Chromebooks from '../pages/products/Chromebooks';
import Tablets from '../pages/products/Tablets';
import Desktops from '../pages/products/Desktops';
import Laptops from '../pages/products/Laptops';
import Monitors from '../pages/products/Monitors';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { Routes, Route } from 'react-router-dom';
import CartCard from '../components/CartCard';

function HomeRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Business' element={<Business/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Education' element={<Education/>}></Route>
        <Route path='/Profile/*' element={<Profile/>}></Route>
        <Route path='/Chromebooks' element={<Chromebooks/>}></Route>
        <Route path='/Tablets' element={<Tablets/>}></Route>
        <Route path='/Desktops' element={<Desktops/>}></Route>
        <Route path='/Laptops' element={<Laptops/>}></Route>
        <Route path='/Monitors' element={<Monitors/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/CartCard' element={<CartCard/>}></Route>
      </Routes>
    </div>
  )
}

export default HomeRoutes