import React, { useState } from 'react';
import assets from '../assets/assets';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
    
   //Step-1 we are getting data in this state and now we will send this data on API
    const [currentState,setCurrentState] = useState("Sign up");
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [bio,setBio] = useState("");
    const [isDataSubmitted,setIsDataSubmitted] = useState(false);

    //Step-2 import login function from AuthContext
    const { login } = useContext(AuthContext);


    const onSubmitHandler = (event) => {
        event.preventDefault();
      
      //Step-3 It will check the current state if current state is 'sign up ' it will setIsDataSubmitted(true) 
        if(currentState === 'Sign up' && !isDataSubmitted){
            setIsDataSubmitted(true);
            return;
        }

        //Step-4 Now we will call login function and will pass state as data as
        login( currentState === 'Sign up' ? 'signup' : 'login', { fullName, email, password, bio})
    }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      
      <img src={assets.logo_big} alt="logo" className="w-[min(30vw,250px)]"/>
      <form onSubmit={onSubmitHandler} className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg ">
         <h2 className='font-medium text-2xl flex justify-center  items-center'>
            {currentState}
            {isDataSubmitted &&
            <img
            onClick={()=>setIsDataSubmitted(false)} src={assets.arrow_icon} alt='' className='w-5 cursor-pointer'/> }
            
         </h2>
        {currentState === 'Sign up' && !isDataSubmitted && (
            <input
             onChange={(e)=>setFullName(e.target.value)} value={fullName}
             type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none ' placeholder='Full Name' required/>
        )}

        {!isDataSubmitted && (
            <>
            <input
             onChange={(e)=>setEmail(e.target.value)} value={email}
             type='email' placeholder='Email' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2
            focus:ring-indigo-500' required/>
            <input
             onChange={(e)=>setPassword(e.target.value)} value={password}
             type='password' placeholder='Password' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2
            focus:ring-indigo-500' required/>
            </>
        )}
         
         {currentState === 'Sign up' && isDataSubmitted && (
            <textarea onChange={(e)=>setBio(e.target.value)} value={bio}
            rows={4} className='p-2 border  border-gray-500 rounded-md focus:outline-none focus:ring-2
            focus:ring-indigo-500' 
            placeholder='Enter Bio'
            required></textarea>
         )}

         <button type='submit' className='py-3 bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-indigo-600 text-white rounded-md cursor-pointer'>
            { currentState === 'Sign up' ? 'Create Account' : 'Login'}
         </button>

         <div className='flex items-center gap-2 text-sm text-gray-400'>
            <input type='checkbox'/>
            <p>Agree to terms of use & privacy.</p>
         </div>

         <div>
            {currentState === 'Sign up' ? (
                <p className='text-sm text-gray-400' 
                onClick={()=>{setCurrentState('Login'); setIsDataSubmitted(false)}}>
                Already have an account? 
                <span className=' ml-2 font-sm text-white hover:text-violet-400 cursor-pointer'>Login</span></p>
            ) : (
                <p 
                onClick={()=>{setCurrentState('Sign up')}}
                className='text-sm text-gray-400'>Create an account <span className=' ml-2 font-medium text-white hover:text-violet-400 cursor-pointer'>
                    Sign up
                </span></p>
            )}
         </div>

      </form>
    </div>
  );
}

export default LoginPage;
