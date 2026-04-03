import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';

import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartCounter = useSelector((state) => state.cart.cartCounter);

  function handleCartBtn() {
    dispatch(uiActions.cartOpen());
  }

  return (
    <button onClick={handleCartBtn} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCounter}</span>
    </button>
  );
};

export default CartButton;
