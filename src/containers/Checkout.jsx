import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
const Checkout = () => {
  const { state, removeFromCart} = useContext(AppContext);
  const {cart} = state;
  const handleRemove = product => () => {
    removeFromCart(product);
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <section className="Checkout">
      <section className="Checkout-content">
        {cart.length > 0 ?
          <h3>
            Lista de pedidos:
          </h3>
          :
          <h3>
            Sin Pedidos.
          </h3>
        }
        {cart.map((item) =>
          <section className="Checkout-item" key={item.title}>
            <section className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{'$' + item.price}</span>
            </section>
            <button type='button' onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" title="Eliminar" />
            </button>
          </section>
        )}
      </section>
      {cart.length > 0 &&
      <section className="Checkout-sidebar">
        <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
        <Link to="/checkout/information">
          <button type='button'>Continuar pedido</button>
        </Link>
      </section>
      }
    </section>
  );
};

export default Checkout