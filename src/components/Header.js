import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firbase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector(store=> store.user)
  const navigate = useNavigate()
  const HandleSignout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <>
      <div className='fixed flex justify-between bg-gradient-to-b from-black top-0 pt-3 px-20 w-full'>
        <img className=' object-cover object-center w-[27vh]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
       { user && (
         <div className=' flex items-center justify-center gap-2'>
          <div className='bg-red-600 p-[1.3px] pt-[1.5px] rounded'>
         <img className='rounded w-[5vh] h-[5vh] object-cover object-center' src={user.photoURL} alt="" />
          </div>
         <button onClick={HandleSignout} className='px-2 py-2 bg-red-600 text-white text-[2vh] rounded'>
         signout
         </button>
       </div>
       )}
      
      </div>
    </>
  )
}

export default Header
