import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  const paypalOptions ={
    clientId: 'Aa1-8QjTPVXfc9MDBIP-eDTAFRtSljfl6IQA5W1Vh3vBwlROSnctSF8YS2IDh4RUbNGHjB-TnEN8r8rV',
    intent: 'capture',
    currency: 'USD'
  };
  const buttonStyles= {
    layout: 'vertical',
    shape: 'rect'
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const navigate = useNavigate();
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder, navigate('/checkout/success'));
    }
  }
  return (
    <section className="Payment">
      <section className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item)=>(
            <section className='Payment-item' key={item.title}>
              <section className='Payment-element'>
                <span>
                  {' '}
                  ${' '}{item.price}
                </span>
              </section>
            </section>
        ))}
        <section className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('START PAYMENT')}
            onSuccess={handlePaymentSuccess}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </section>
      </section>
      <section></section>
    </section>
  );
};

export default Payments;