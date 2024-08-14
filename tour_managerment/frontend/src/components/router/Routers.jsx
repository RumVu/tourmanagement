import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Tours from "../pages/Tours";
import ThankYou from "../pages/ThankYou";
import About from '../About/About';
export const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>

      <Route path='/home' element={<Home />} />
      
      <Route path='/about' element={<About />} />
      
        <Route path='/tours' element={<Tours/>}/>

        <Route path='/tours/:id' element={<TourDetails />}/>

        <Route path='/login' element={<Login/>}/>

        <Route path='/Register' element={<Register/>}/>
        
        <Route path='/thank-you' element={<ThankYou/>}/>
        
      <Route path='/tours/search' element={<SearchResultList />} />   
      
      
    </Routes>
  )
}
export default Routers;