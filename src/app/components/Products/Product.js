import React from 'react';
import { getItemFromList } from '../../utils/helpers';
import { setCartProducts } from '../../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const Product = ({ product }) => {
  const cart = useSelector(state => state.cart.data);
  const dispatch = useDispatch();
  
  const selectedProduct = getItemFromList(cart, product);

  const handleAddProduct = (product) => (e) => {
    product.isAdded = true;

    if (!selectedProduct) {
      const updatedProducts = [...cart, product];
     
      dispatch(setCartProducts(updatedProducts));
    } else {
      ++selectedProduct.quantity;

      const selectedIndex = cart.findIndex(selectedIndex => selectedIndex.id === product.id);
      let updatedCart = [...cart];
      updatedCart[selectedIndex] = selectedProduct;
      dispatch(setCartProducts(updatedCart));
    } 
  };
  
  return(
      <>
        <div key={product.id} className="products__item">
            {product.isAdded && <span className="product-counter">{product.quantity}</span> }
            <img src={product.image} alt={product.name}/>
            <div>{product.name}</div>
            <button 
              className="products__item-add-btn"
              onClick={handleAddProduct(product)}
            >
              Add to Cart
            </button>
            <span>${product.price}</span>
        </div>
      </>
      
  )
};

export default Product;
