import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import SyllabusPage from "./Components/SyllabusPage";
import RemindersPage from "./Components/Reminderspage";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileContent from "./Components/ProfileContent";
import LoginBox1 from "./Components/LoginBox1";
import useToken from "./useToken";
import TodoBox from "./Components/TodoComponents/TodoList";
const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginBox1 setToken={setToken} />;
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SyllabusPage" element={<SyllabusPage />} />
        <Route path="/RemindersPage" element={<RemindersPage />} />
        <Route path="/ProfilePage" element={<Profile />} />
        <Route path="/ProfileContentPage" element={<ProfileContent />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
