import React, { useState } from 'react';
import Item from '../Cart';
import './navigation.scss';

const Navigation = ({ cart, setCart }) => {
  const [isShowModal, setShowModal] = useState(false);

  let totalCost = 0;
  const products = cart.map(product => {
    totalCost = totalCost + (Number(product.price) * product.quantity);

    return <Item key={product.id} cart={cart} product={product} setCart={setCart} />
  });

  const onClickCart = () => {
    if (!cart.length) return;
    
    setShowModal(!isShowModal)
  };

  const onCloseCart = () => {
    setShowModal(false);
  }

  return(
    <>
      <div className="navigation">
        <div>Carlsberg Exam</div>
        <div onClick={onClickCart} className="cart">
          <i className="fas fa-shopping-cart"/> 
          { cart.length > 0 && <span> Cart ({cart.length})</span> }
        </div>
        
      </div>
      { isShowModal &&
        <>
          <div className="cart__items">
            <div className="cart__header">
              <h2>Cart</h2>
              <i className="far fa-times-circle" onClick={onCloseCart}/>
            </div>
            { products.length ? products : <p className="text-center">No products selected</p> }
            <div className="cart__total">
              { totalCost > 0 && <div>Total: ${totalCost}</div>}
            </div>
          </div>
          <div className="dark-overlay"></div>
        </>
      }
    </>
  )
};

export default Navigation;
