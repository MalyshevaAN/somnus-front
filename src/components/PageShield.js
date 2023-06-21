import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from "../components/AuthContext";

const PageShield = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={authenticated ? <Component /> : <Navigate to="/" replace />}
    />
  );
};

export default PageShield;


