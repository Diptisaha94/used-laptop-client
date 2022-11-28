import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import ErrorPage from "../component/ErrorPage";
import Home from "../component/Home";
import Loading from "../component/Loading";
import Main from "../component/Main";
import Products from "../component/Products";
import DashboardLayout from "../DashboardLayout";
import MyOrders from "../MyOrders";
import AllBuyers from "../pages/admin/AllBuyers";
import AllSellers from "../pages/admin/AllSellers";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddProducts from "../seller/AddProducts";
import MyProducts from "../seller/MyProducts";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

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
            path:'/home',
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
            path:'/blogs',
            element:<Blog></Blog>
        },
        {
            path:'/loading',
            element:<Loading></Loading>
        },
        {
            path:'/category/:id',
            element:<PrivateRoute><Products></Products></PrivateRoute>,
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
                {
                    path:'/dashboard/myorders',
                    element:<MyOrders></MyOrders>
                    //loader:({params}) => fetch(`http://localhost:5000/category/${params.email}`)
                },
                {
                    path:'/dashboard/allbuyers',
                    element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                },
                {
                    path:'/dashboard/allsellers',
                    element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
                },
                {
                    path:'/dashboard/myproducts/:email',
                    element:<MyProducts></MyProducts>,
                    loader:({params}) => fetch(`http://localhost:5000/myproducts/${params.email}`)
                }  
            ]
        },
       ] 
    },
    
]);
