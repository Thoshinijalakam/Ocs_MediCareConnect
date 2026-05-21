import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Doctors from "./Components/ViewDoctors";
import BookAppointment from "./Components/BookAppointment";
import AddDoctor from "./Components/AddDoctor";
import Footer from "./Components/Footer";

import AdminLogin from "./auth/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminDashboard from "./Components/AdminDashboard";
import RemoveDoctor from "./Components/RemoveDoctor";
import ViewBookedAppointments from "./Components/ViewBookedAppointments";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book" element={<BookAppointment />} />

        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/remove-doctor" element={<RemoveDoctor />} />
        <Route
          path="/view-booked-appointments"
          element={<ViewBookedAppointments />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}