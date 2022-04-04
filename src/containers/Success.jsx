import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map';

const Success = () => {
  const {state} = useContext(AppContext);
  const {buyer} = state;
  return (
    <section className="Succes">
      <section className="Success-content">
        <h2>{`${buyer.name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <section className="Success-map">
          <Map/>
        </section>
      </section>
    </section>
  );
};

export default Success;