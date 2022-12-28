import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main/Main'
import About from '../Pages/About/About'
import Home from '../Pages/Home/Home'
import Message from '../Pages/Message/Message'

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
        ]
    }

])