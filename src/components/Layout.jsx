import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

const Layout = ({children}) => {
    return (
        <section className='Main'>
            <Header/>
            {children}
            <Footer/>
        </section>
    );
};
export default Layout;