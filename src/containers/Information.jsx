import React, {useRef, useContext} from 'react';
import '../styles/components/Information.css';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
const Information = () => {
    const {state, addToBuyer} = useContext(AppContext);
    const form = useRef(null);
    const {cart} = state;
    const navigate = useNavigate();
    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer);
        navigate('/checkout/payment');
    };
    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
      };
    return (
        <section className="Information">
            <section className="Information-content">
                <section className="Information-head">
                    <h2>Informacion de contacto:</h2>
                </section>
                <section className="Information-form">
                    <form ref={form}>
                        <input type='text' placeholder='Nombre completo' name='name'/>
                        <input type='text' placeholder='Correo Electonico' name='email'/>
                        <input type='text' placeholder='Direccion' name='address'/>
                        <input type='text' placeholder='Apto.' name='apto'/>
                        <input type='text' placeholder='Ciudad' name='city'/>
                        <input type='text' placeholder='Pais' name='county'/>
                        <input type='text' placeholder='Estado - Departamento' name='state'/>
                        <input type='text' placeholder='Codigo postal' name='cp'/>
                        <input type='text' placeholder='Telefono' name='phone'/>
                    </form>
                </section>
                <section className="Information-buttons">
                    <section className="Information-back">
                        <button type='button' onClick={() => navigate(-1)}>
                            Regresar
                        </button>         
                    </section>
                    <section className="Information-next">
                        <button type="button" onClick={handleSubmit}>
                            Pagar
                        </button>
                    </section>
                </section>
            </section>
            <section className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map((item)=>
                    <section className="Information-item" key={item.title}>
                        <section className="Information-element">
                            <h1>{item.title}</h1>
                            <h1>${item.price}</h1>
                        </section>
                    </section>
                )}  
            </section>
            <section>
            <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
            </section>
        </section>
    );
}

export default Information;