import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main/Main'
import About from '../Pages/About/About'
import Home from '../Pages/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import Message from '../Pages/Message/Message'
import SignUp from '../Pages/SignUp/SignUp'



export const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/message',
                element:<Message></Message>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            
        ]
    }

])