// Dependencies
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import NotFoundScreen from "../screens/NotFound/NotFoundScreen";

const Navigation = () => (
    <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/not-found" element={<NotFoundScreen />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
)

export default Navigation;