import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a second product - amazing!"
          id={1}
        />
        <ProductItem
          title="Test 2"
          price={41}
          description="This is a first product - cool!"
          id={2}
        />
        <ProductItem
          title="Test 3"
          price={10.99}
          description="This is a first product - great!"
          id={3}
        />
        <ProductItem
          title="Test 4"
          price={14}
          description="This is a first product - nice!"
          id={4}
        />
      </ul>
    </section>
  );
};

export default Products;
