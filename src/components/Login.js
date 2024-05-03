import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div>
      <Header />
      <div style={{backgroundImage:`url('https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg')` ,backgroundSize:"cover",backgroundPosition:"center"}} className= ' bg-black w-full h-screen'>
         <div className='w-full h-full flex items-end justify-center  bg-[#0000008e]'>
            <form className='pt-5 px-[8vh]  text-white w-[60vh] flex flex-col items-start justify-start h-[85vh] rounded bg-[#0000009c]' action="">
                <h2 className='text-[5vh] font-[350]'>Sign In</h2>
               <div className='text-slate-400 w-full pt-5 gap-5 flex flex-col items-center'>
               <input  className='bg-[#111214a5] rounded border-red-600 border-[1px] pl-3 pr-[20vh] py-3 text-[10px] outline-none' type="text" placeholder='Email or mobile number' />
                <input className='bg-[#111214a5] rounded border-red-600 border-[1px] pl-3 pr-[20vh] py-3 text-[10px] outline-none' type="password" placeholder='Password'  />
                <button className='bg-[#E50914] text-[white] w-[105%] rounded text-[13px]  py-1  text-center '>sign in</button>
               </div>
                <h2 className='text-[12px] mt-10 font-[350] font-[helvetica]'>New to Netflix? <span className='font-[500]'>Sign up now.</span></h2>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Login
