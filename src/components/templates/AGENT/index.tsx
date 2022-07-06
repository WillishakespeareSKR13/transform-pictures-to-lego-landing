import { Routes, Route } from 'react-router-dom';
import PointSale from './pointsale';
import CompleteTicketOrderPay from '../AGENT/pointsale/ticket/[id]';

const ADMIN = () => {
  return (
    <Routes location={window.location.pathname.replace('/dashboard', '')}>
      <Route path="/" element={<PointSale />} />
      <Route path="/ticket/:order" element={<CompleteTicketOrderPay />} />
    </Routes>
  );
};

export default ADMIN;
