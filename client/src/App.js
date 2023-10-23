import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  AboutPage,
  ContactPage,
  HomePage,
  LoginPage,
  PostingPage,
} from "./pages";

function App() {
  return (
    // <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
    <div className="bg-gradient-to-r from-slate-100 via-blue-100 to-slate-900">
      <Routes>
        <Route path="" element={<LoginPage />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="posts" element={<PostingPage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        {/* <Route path="admin">
          <Route path="" element={<AdminPage />}></Route>
          <Route path="hotel" element={<AdminHotel />}></Route>
          <Route path="customer" element={<AdminCustomer />}></Route>
          <Route path="booking" element={<AdminBooking />}></Route>
        */}
      </Routes>
    </div>
  );
}

export default App;
