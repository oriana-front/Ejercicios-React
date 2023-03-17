import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      
    <Outlet/>
    </div>
  )
}

export default AuthLayout
