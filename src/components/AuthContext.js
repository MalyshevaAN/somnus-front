import React, { createContext, useState, useEffect } from "react";
import jwt from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const decodeToken = (token) => {
      try {
        const decoded = jwt(token, 'qBTmv4oXFFR2GwjexDJ4t6fsIUIUhhXqlktXjXdkcyygs8nPVEwMfo29VDRRepYDVV5IkIxBMzr7OEHXEHd37w==');
        console.log(decoded)
        console.log(1)
        const { id, userName, firstName, lastName, email, roles, avatarPath } = decoded;
        console.log(id, firstName)

        const relativePath = avatarPath;
        const url = relativePath;

        setUserData({ id, userName, firstName, lastName, email, roles, url });
        console.log(url)
        setAuthenticated(true);
      } catch (error) {
        console.log("Invalid token");
        setAuthenticated(false);
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      decodeToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

