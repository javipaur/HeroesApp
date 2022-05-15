import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marverl/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<MarvelScreen />}></Route>
          <Route path='/marvel' element={<MarvelScreen />}></Route>
          <Route path='/dc' element={<DcScreen />}></Route>
          <Route path='/search' element={<DcScreen />}></Route>
          <Route path='/login' element={<LoginScreen />}></Route>
        </Routes>
      </BrowserRouter>


  )
}
