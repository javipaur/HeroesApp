import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />}></Route>
          <Route path='/*' element={<DashboardRouters/>}></Route>  
        </Routes>
      </BrowserRouter>


  )
}
