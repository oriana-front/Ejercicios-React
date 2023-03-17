import {Routes,Route, Router } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './Pages/auth /Login'
import AuthLayout from './Layout/auth/AuthLayout'
import Register from './Pages/auth /Register'
import ForgePassword from './Pages/auth /ForgePassword'
import Menu from './Pages/auth /Menu.jsx'
import ChangePassword from './Pages/auth /ChangePassword'
import Error404 from './Pages/404'
import { BrowserRouter } from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AuthLayout/>}>
        <Route index element={<Login/>}></Route>
        <Route path="registrate" element={<Register/>}> </Route>
        <Route path='OlvidePassword' element={<ForgePassword/>}></Route>
        <Route path='CambiarPassword/:token'
         element={<ChangePassword/>}></Route>
      </Route>
      <Route path='*' element={<Error404/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
