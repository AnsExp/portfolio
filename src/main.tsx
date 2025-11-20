import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomCursor from './components/CustomCursor';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import DownloadPage from './pages/DownloadPage';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomCursor />
    <BrowserRouter basename='portfolio/'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
