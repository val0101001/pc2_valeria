import React from 'react';
import { Navigate } from 'react-router-dom';
import { USER_ID_LOCAL_KEY } from '../constants';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const userId = localStorage.getItem(USER_ID_LOCAL_KEY);

  return userId ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
