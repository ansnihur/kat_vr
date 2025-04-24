import React from "react";
import Homescreen from '../../components/home/Homescreen';
import More from '../../components/more/More';
import Product from '../../components/about/Product';
import Meet from '../../components/about/Meet';
import Tech from '../../components/tech/Tech';
import './Homepage.scss';

// For Lida: Header не додаємо на pages сторінки, бо він завжди є в App.jsx
const Homepage = () => {
    return (
        <div className="homepage">
            <Homescreen />
            <More />
            <Product /> 
            <Meet />
            <Tech />
        </div>
    );
}

export default Homepage;