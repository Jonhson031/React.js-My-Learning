import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = ({ title, price, description, id }) => {
  const newItem = {
    id,
    price,
    quantity: 1,
    totalPrice: price,
    title: title,
  };
  const dispatch = useDispatch();
  function handleNewItem() {
    dispatch(addToCart(newItem));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleNewItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
