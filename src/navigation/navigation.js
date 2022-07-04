// Dependencies
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Screens
import AdminScreen from "../screens/Admin/AdminScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import LandingScreen from "../screens/Landing/LandingScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import NotFoundScreen from "../screens/NotFound/NotFoundScreen";

const Navigation = () => (
    <Routes>
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/landing-page" element={<LandingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/not-found" element={<NotFoundScreen />} />
        <Route path="/" element={<Navigate replace to="/landing-page" />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
)

export default Navigation;