import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firbase"
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux';
import {addUser,removerUser} from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        console.log("created");
      
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName} = user
            dispatch(addUser({uid,email,displayName}))
            // ...
        } else {
            dispatch(removerUser())
            // User is signed out
            // ...
        }
        });
    },[])
  return (
    <div className=''>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
