import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../store/authSlice";
function ProtectedRoute({ redirectTo = '/auth/login', element }) {
    const location = useLocation()
    const isLoggedIn = useSelector(isLoggedInSelector());
    if (!isLoggedIn) return <Navigate to={ redirectTo } state={{referrer: location}}/>
    return element

}
// // ===== первый вар по видео
// function ProtectedRoute({ children, redirectTo = '/auth/login' }) {
//     const location = useLocation()
//     const isLoggedIn = useSelector(isLoggedInSelector());
//     if (!isLoggedIn) return <Navigate to={ redirectTo } state={{referrer: location}}/>
//     return children

// }
export default ProtectedRoute
