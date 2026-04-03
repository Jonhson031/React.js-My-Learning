import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from './store/cartSlice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
