import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import Home from './Components/Home.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import Users from './Components/Users.jsx'
import CoffeeDetails from './Components/CoffeeDetails.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/addCoffee',
        element:<AddCoffee/>
      },
      {
        path:'/updateCoffee/:id',
        element: <UpdateCoffee/>,
        loader:({params})=>fetch(`https://espresso-emporium-server-git-main-salehinislams-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path:'/signup',
        element: <SignUp/>
      },
      {
        path:'/login',
        element: <Login/>,
        loader:()=>fetch(`https://espresso-emporium-server-git-main-salehinislams-projects.vercel.app/users`)
      },
      {
        path:'/users',
        element:<Users/>,
        loader:()=>fetch(`https://espresso-emporium-server-git-main-salehinislams-projects.vercel.app/users`)
      },
      {
        path:`/coffeeDetails/:id`,
        element:<CoffeeDetails/>,
        loader:({params})=>fetch(`https://espresso-emporium-server-git-main-salehinislams-projects.vercel.app/coffee/${params.id}`),
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
    <RouterProvider router={router}/>
    </AuthProviders>
  </StrictMode>,
)
