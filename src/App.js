// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRegistration from '../src/pages/CustomerRegistration';
import AdminRegistration from '../src/pages/AdminRegistration';
import AdminLogin from '../src/pages/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/customer-register" element={<CustomerRegistration />} />
        <Route path="/admin-register" element={<AdminRegistration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
