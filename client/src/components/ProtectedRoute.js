import React from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../utility/localStorageManager'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const user = getItem(KEY_ACCESS_TOKEN);
    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedRoute