import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const ErrorPage = () => {
    const {logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div className='md:grid grid-cols-2'>
            <img src='https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1927.jpg?w=740&t=st=1669347091~exp=1669347691~hmac=83f43072dc973135130ae46ffb0fa66ab3e02d553e74a6220e25a3a31598c334' alt=''></img>
            <div className="my-auto">
            <h3 className='text-2xl'>Something went wrong</h3>
            <h3 className='text-2xl'>Your path is not Found</h3>
            <h4 className="text-2xl"> Please <button className='text-primary' onClick={handleLogOut}>Sign out</button></h4>
            </div>
        </div>
    );
};

export default ErrorPage;