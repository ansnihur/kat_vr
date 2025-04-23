import React from "react";
import Homescreen from '../../components/home/Homescreen';
import More from '../../components/more/More';
import Product from '../../components/about/Product';

// For Lida: Header не додаємо на pages сторінки, бо він завжди є в App.jsx
const Homepage = () => {
    return (
        <>
            <Homescreen />
            <More />
            <Product />       
        </>
    );
}

export default Homepage;