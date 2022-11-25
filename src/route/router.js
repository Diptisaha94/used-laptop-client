import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage";
import Home from "../component/Home";
import Loading from "../component/Loading";
import Main from "../component/Main";
import Products from "../component/Products";
import DashboardLayout from "../DashboardLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddProducts from "../seller/AddProducts";

export const router = createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       errorElement:<ErrorPage></ErrorPage>,
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
            path:'/loading',
            element:<Loading></Loading>
        },
        {
            path:'/category/:id',
            element:<Products></Products>,
            loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path:'/dashboard',
            element:<DashboardLayout></DashboardLayout>,
            children:[
                {
                    path:'/dashboard/addaproduct',
                    element:<AddProducts></AddProducts>
                },
            ]
        },
       ] 
    },
    
]);
