import { Routes, Route } from 'react-router-dom';
import Store from './Stores';
import StoreAdd from './Stores/store/add';
import StoreAddStoreType from './Stores/store/add/storeType';
import StoreEdit from './Stores/store/edit';
import StoreView from './Stores/store';
import StoreAddUser from './Stores/store/users';
import PointSale from './Stores/store/pointSale';
import Details from './Stores/store/details';
import Products from './Stores/store/products';
import Colors from './Stores/store/colors';
import Rooms from './Stores/store/rooms';
import CompleteOrderPay from './Stores/store/pointSale/complete/[id]';
import SaleOrder from './Stores/store/saleOrders';

const ADMIN = () => {
  return (
    <Routes location={window.location.pathname.replace('/dashboard', '')}>
      <Route path="/" element={<Store />} />
      <Route path="/store/add" element={<StoreAdd />} />
      <Route path="/store/edit/:id" element={<StoreEdit />} />
      <Route path="/store/:id" element={<StoreView />} />
      <Route path="/store/:id/:id" element={<Details />} />
      <Route path="/store/add/storeType" element={<StoreAddStoreType />} />
      <Route path="/store/:id/users" element={<StoreAddUser />} />
      <Route path="/store/:id/pointsale" element={<PointSale />} />
      <Route
        path="/store/:id/pointsale/complete/:order"
        element={<CompleteOrderPay />}
      />
      <Route path="/store/:id/saleorders" element={<SaleOrder />} />
      <Route path="/store/:id/products" element={<Products />} />
      <Route path="/colors" element={<Colors />} />
      <Route path="/rooms" element={<Rooms />} />
    </Routes>
  );
};

export default ADMIN;
