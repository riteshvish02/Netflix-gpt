import React, { useRef, useState } from 'react'
import Header from './Header'
import {auth} from '../utils/firbase'
import {CheckValidateemailData,CheckValidatepasswordData} from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isSignin,setSignin] = useState(true)
  const [passerror,setpasserror] = useState("")
  const [emailerror,setemailerror] = useState("")
  const [errormsg,seterror] = useState("")
  const ToggleForm = ()=>{
    setSignin(!isSignin)
  }

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const HandleButtonClick = ()=>{
    //validate form
   var message1 =  CheckValidateemailData(email.current.value)
   var message2 =  CheckValidatepasswordData(password.current.value)
   setemailerror(message1)
   setpasserror(message2)
   if(message1 && message2) return ;
  if(message1 == null && message2 == null){
    //signin - signup
  if(!isSignin){
    //signup logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
        const user = userCredential.user;
            updateProfile(user, {
              displayName:name.current.value, photoURL: "https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }).then(() => {
              // Profile updated!
                const {uid,email,displayName,photoURL} = user
                dispatch(
                  addUser({
                    uid,
                    email,
                    displayName,
                    photoURL
                  })
                )
              // ...
            }).catch((error) => {
              seterror(error.message)
            });
      // console.log(user);
      navigate('/browse')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterror(errorMessage +" "+ errorCode)
    });
 }else{
      //signin logic 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage +" "+ errorCode)
      }); 
  }

  }
  }


  return (
    <div>
      <Header />
      <div style={{backgroundImage:`url('https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg')` ,backgroundSize:"cover",backgroundPosition:"center"}} className= ' bg-black w-full h-screen'>
         <div className='w-full h-full flex items-end justify-center  bg-[#0000008e]'>
            <form onSubmit={(e)=>e.preventDefault()} className='pt-5 px-[8vh]  text-white w-[60vh] flex flex-col items-start justify-start h-[85vh] rounded bg-[#0000009c]' action="">
                <h2 className='text-[5vh] font-[350]'>{isSignin ? 'Sign in' : 'Sign up'}</h2>
               <div className='text-slate-400 w-full pt-5 gap-5 flex flex-col items-center'>
                {
                !isSignin && 
                <input ref={name}   className='bg-[#111214a5] rounded border-red-600 border-[1px] pl-3 pr-[20vh] py-3 text-[2vh] outline-none' type="text" placeholder='Full Name'  />
                }
              <div>
              <input ref={email}    className='bg-[#111214a5] rounded border-red-600 border-[1px] pl-3 pr-[20vh] py-3 text-[2vh] outline-none' type="text" placeholder='Email or mobile number' />
                <h2 className='text-red-600 ml-1 text-sm mt-1'>{ emailerror }</h2>
              </div>
              <div>
               <input ref={password}   className='bg-[#111214a5] rounded border-red-600 border-[1px] pl-3 pr-[20vh] py-3 text-[2vh] outline-none' type="password" placeholder='Password'  />
               <h2 className='text-red-600 ml-1 text-sm mt-1'>{ passerror }</h2>
              </div>
                <h2 className='text-red-600 m-0 text-xs'>{errormsg}</h2>
                <button onClick={HandleButtonClick} className='bg-[#E50914] text-[white] w-[100%] rounded text-[2.5vh]  py-2  text-center '>
                {isSignin ? 'Sign in' : 'Sign up'}
                </button>
               </div>
                <h2 className='cursor-pointer text-[18px] mt-10 font-[350] font-[helvetica]'>{isSignin ? 'New to Netflix?' : 'Already registered?'} <span onClick={ToggleForm} className='font-[300] font-[mono]'>{isSignin ? 'Sign up now' : 'Sign in now'}</span></h2>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Login
