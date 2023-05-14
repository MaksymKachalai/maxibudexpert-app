import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../../pages/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CompanyInfoPage } from '../../pages/CompanyInfoPage';
import { Homepage } from '../../pages/Homepage';
import { ServicesPage } from '../../pages/ServicesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/info" element={<CompanyInfoPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
