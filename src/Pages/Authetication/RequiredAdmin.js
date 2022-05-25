import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hook/useAdmin';
import Loading from '../Shared/Loading';

const RequiredAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminloading] = useAdmin(user)
    let location = useLocation();
    if (loading || adminloading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequiredAdmin;