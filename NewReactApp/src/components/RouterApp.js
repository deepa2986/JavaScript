import React from 'react'
import Registration from './Registration'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Login'

function RouterApp() {

    const router = createBrowserRouter([
         {path : '/' , element:<Login/>},
        {path:'/registration',element:<Registration/>}
    ])
  return (
    <div className='wrapper'>
     <RouterProvider router={router}/>
    </div>
  )
}

export default RouterApp