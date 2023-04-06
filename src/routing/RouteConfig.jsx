/*
This file handles routing based on if the user is logged in or not
If the user is logged in the user will be redirected to dashboard by default and signup, sign in paths becomes disable.
This is an example of protected route.
*/
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/Signin";
import SignUpFrom from "../pages/Signup";

function RouteConfig() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Box>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<SignUpFrom />} />
          <Route path={"/signin"} element={<SignIn />} />
        </Routes>
      )}
    </Box>
  );
}

export default RouteConfig;
