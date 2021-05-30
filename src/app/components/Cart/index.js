import React from 'react';
import './cart.scss';

const Item = ({ cart, product, setCart }) => {
    console.log('product', product)

    const onUpdateQty = (selectedProduct, isAdd) => () => {

        if (isAdd) {
            ++selectedProduct.quantity;
        } else {
            --selectedProduct.quantity;
        };

        if (!selectedProduct.quantity) return;

        const selectedIndex = cart.findIndex(selectedIndex => selectedIndex.id === selectedProduct.id);
        let updatedCart = [...cart];
        updatedCart[selectedIndex] = selectedProduct;
        setCart(updatedCart);
    };
        
    const onDeleteItem = ({ id }) => () => {
        const selectedProduct = cart.findIndex(selectedProduct => selectedProduct.id === id);
        let updatedCart = [...cart];
        updatedCart[selectedProduct].quantity = 1;
        updatedCart[selectedProduct].isAdded = false;

        updatedCart.splice(selectedProduct, 1);
        setCart(updatedCart);
    }

    return(
      <>
        <div className="cart__item" key={product.id}>
            <div className="cart__item-detail">
                <img src={product.image} alt={product.image}/>
                <span className="cart__item-controls-container">
                    <span>{product.name}</span>
                    <div>
                        <i onClick={onUpdateQty(product, 'add')} className="fas fa-plus-square" />
                        <span className="cart__item-qty">{product.quantity}</span>
                        <i className={`fas fa-minus-square ${product.quantity === 1 ? 'disabled' : ''}`}  onClick={onUpdateQty(product)}></i>
                        <i className="fas fa-trash remove-btn"  onClick={onDeleteItem(product)}/>
                    </div>
                </span>
                
            </div>
            
            <span  className="cart__item-price">
                <span>${product.price * product.quantity}</span>
            </span>
        </div>
      </>
      
  )
};

export default Item;
