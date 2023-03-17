import React, { useState } from 'react'
import { toast } from 'react-toastify';


import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEyeOff, HiOutlineEye, HiMailOpen } from "react-icons/hi"
import { Link } from 'react-router-dom';


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

 const HadleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const hadleSubmit = (e) =>{
     e.preventDefault();
      console.log(email,password);
     if([email,password].includes("")){
        toast.error("todos los campos son obligatorias",{
          theme:"colored"
        });
        return;
     }
        if(password.length<8){
          toast.error("Ingresar 8 caracteres",{
            theme:"colored"
          });
          return;
        }

        }
     
  return (
    <div className='bg-white p-8  rounded-lg w-96'>
      <div className='mb-10 '>
        <h1 className='text-3xl upprcase font-bold text-center text-sky-600' >Iniciar Sesión</h1>
      </div>
      <form onSubmit={hadleSubmit} className='flex flex-col gap-4'>
        <div className='relative'>
          <HiOutlineMail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type="email" className="w-full border border-gray-200 outline-none py-1 px-8 rounded-lg"
            placeholder='Correo Electronico' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='relative'>
          <HiOutlineLockClosed className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type={showPassword ? "text" : "password"} className="w-full border border-gray-200 outline-none py-1 px-8 rounded-lg"
            placeholder='Contraseña' 
            value={password} 
            onChange={ (e) => setPassword(e.target.value)}/>
          {showPassword ? (
            <HiOutlineEye onClick={HadleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
          ) : (
            <HiOutlineEyeOff onClick={HadleShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer' />
          )}

        </div>
        <div>
          <button type='submit' className='mt-6 bg-sky-600 text-white w-full rounded-lg py-2 px-6 hover:scale-105 translate-all'>
            Ingresar
          </button>
        </div> 
           <div className='text-center px-6'>
            No tienes una cuenta? <Link  to="registrate" className='text-sky-500 py-2 px-1 fond-medium hover:underline transition-all'>Registrate</Link> 
           </div>
          

      </form>
    </div>
  )
}

export default Login
