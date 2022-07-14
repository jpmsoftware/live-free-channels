import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import View from './components/View';
import Info from './components/Info';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/ >}/>
      <Route path="/view" element={<View />} />
      <Route path="info" element={<Info />} />
    </Routes>
  </BrowserRouter>
);