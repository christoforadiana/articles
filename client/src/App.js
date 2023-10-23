import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { AboutPage, ContactPage, HomePage, PostingPage } from './pages';

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      {/* <h1>Redux Toolkit</h1> */}
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="posts" element={<PostingPage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        {/* <Route path="admin">
          <Route path="" element={<AdminPage />}></Route>
          <Route path="hotel" element={<AdminHotel />}></Route>
          <Route path="customer" element={<AdminCustomer />}></Route>
          <Route path="booking" element={<AdminBooking />}></Route>
        </Route>
        <Route path="customer" element={<CustomerPage />}></Route>
        <Route path="bookings" element={<BookingPage />}></Route>
        <Route path="hotel-detail" element={<RoomPage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
