import React, {useContext} from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
const Header = () => {
    const {state} = useContext(AppContext);
    const { cart } = state;
    return (
        <section className='Header'>
            <h1 className='Header__tittle'>
                <Link to='/'>
                    PlatziConf Merch
                </Link>
            </h1>
            <section className='Header__checkout'>
                <Link to='/checkout'>
                    <i className='fas fa-shopping-basket' title="Checkout"/>
                </Link>
                {
                    cart.length > 0 &&
                    <section className='Header__alert'>
                       {cart.length}
                    </section>
                }
            </section>
        </section>
    );
}

export default Header;