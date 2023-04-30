import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Homepage } from '../../pages/Homepage/Homepage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
      </Route>
    </Routes>
  );
};