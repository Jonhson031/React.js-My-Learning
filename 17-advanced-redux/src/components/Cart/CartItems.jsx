import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import classes from './CartItem.module.css';

const CartItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  function handleAddItem(item) {
    dispatch(addToCart(item));
  }

  function handleRemoveItem(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <ul>
      {items.length > 0 &&
        items.map((item) => (
          <li key={item.id} className={classes.item}>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>
                ${item.totalPrice.toFixed(2)}{' '}
                <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{item.quantity}</span>
              </div>
              <div className={classes.actions}>
                <button onClick={() => handleRemoveItem(item.id)}>-</button>
                <button onClick={() => handleAddItem(item)}>+</button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartItems;
