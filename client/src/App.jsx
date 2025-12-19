import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
 import ErrorPages from './Pages/ErrorPages';
 import Home from './Pages/Home';
  import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';

const App = () => {
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPages/>,
        children:[
            {
                path:"/",
                element:<Dashboard/>
            },
            {
              path:"/about",
              element:<About/>
            },
             {
              path:"/login",
              element:<SignIn/>
            },
            {
              path:"/signup",
              element:<SignUp/>
            },
            {
              path:"/about",
              element:<About/>
            },
             {
              path:"/project",
              element:<Projects/>
            },
            
        ]

    },
    
  ])
  return (
     <RouterProvider router={router}></RouterProvider>
  )
}

export default App