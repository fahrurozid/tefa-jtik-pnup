import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import ServiceDetailPage from './components/ServiceDetailPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 1. Bungkus semuanya dengan BrowserRouter agar Link bisa berfungsi */}
    <BrowserRouter>
      {/* 2. Routes akan memilih komponen mana yang ditampilkan berdasarkan URL */}
      <Routes>
        {/* URL utama ("/") akan menampilkan komponen App utama Anda */}
        <Route path="/" element={<App />} />
        
        {/* URL dinamis (misal: "/service/saas") akan menampilkan halaman detail */}
        <Route path="/service/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);