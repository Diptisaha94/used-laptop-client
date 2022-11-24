import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Main from "../component/Main";
import Products from "../component/Products";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/category/:id',
            element:<Products></Products>,
            loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        }
       ] 
    }
]);
