import React from 'react';
import { getItemFromList } from '../../utils/helpers';

const Product = ({ product, cart, setCart }) => {
  const productId = product.id;
  
  const selectedProduct = cart.find(selectedProduct => selectedProduct.id === productId);

  const handleAddProduct = (product) => (e) => {
    product.isAdded = true;
    const isProductExist = getItemFromList(cart, product);

    if (!isProductExist) {
      const updatedProducts = [...cart, product];
     
      setCart(updatedProducts);
    } else {
      ++selectedProduct.quantity;

      const selectedIndex = cart.findIndex(selectedIndex => selectedIndex.id === product.id);
      let updatedCart = [...cart];
      updatedCart[selectedIndex] = selectedProduct;
      setCart(updatedCart);
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
