import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState({
    email: "",
    password: "",
    UserType: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    user,
    company,
  };

  useEffect(() => {
    if (authUser.email && authUser.password && authUser.UserType) {
      const url = authUser.UserType === "employee" ? "users" : "company";

      axios
        .post(`http://127.0.0.1:8000/api/${url}/login`, {
          email: authUser.email,
          password: authUser.password,
        })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          if (authUser.UserType === "employee") {
            setUser(response.data.data.user);
          } else {
            setCompany(response.data.data.company);
          }
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error(`${authUser.UserType} Login failed:`, error);
        });
    }
  }, [authUser]);

  // Log the company after it has been set
  useEffect(() => {
    console.log(company);
  }, [company]);
 useEffect(() => {
   console.log(user);
 }, [user]);
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
