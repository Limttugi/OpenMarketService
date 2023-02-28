import './App.css';

import { Route, Routes } from 'react-router-dom';

import ProductList from 'pages/ProductList';
import ProductDetail from 'pages/ProductDetail';
import SignIn from './pages/SignIn';
import SignUp from 'pages/SignUp';
import ShoppingCart from 'pages/ShoppingCart';
import Payment from 'pages/Payment';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/detail/:productId' element={<ProductDetail />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/cart' element={<ShoppingCart />} />
      <Route path='/payment' element={<Payment />} />
    </Routes>
  );
};

export default App;
