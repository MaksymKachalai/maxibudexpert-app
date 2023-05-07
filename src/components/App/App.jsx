import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Homepage } from '../../pages/Homepage/Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ServicesPage } from '../../pages/ServicesPage/ServicesPage';
import { CompanyInfoPage } from '../../pages/CompanyInfoPage/CompanyInfoPage';
import { BlogPage } from '../../pages/BlogPage/BlogPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/info" element={<CompanyInfoPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
