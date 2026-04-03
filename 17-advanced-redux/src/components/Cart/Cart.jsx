import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItems from './CartItems';

const Cart = () => {
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);

  if (!isCartOpen) return;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <CartItems />
    </Card>
  );
};

export default Cart;
