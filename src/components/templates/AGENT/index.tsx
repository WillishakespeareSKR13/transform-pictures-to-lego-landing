import { Routes, Route } from 'react-router-dom';
import PointSale from './pointsale';

const ADMIN = () => {
  return (
    <Routes location={window.location.pathname.replace('/dashboard', '')}>
      <Route path="/" element={<PointSale />} />
    </Routes>
  );
};

export default ADMIN;
