//import './Product.scss'
import './Product.scss'

const Product = () => {
    return (
        <div className="product-container">
            <div className="product-container__text">
                <h1 className="product-container__text-title"><span className="product-container__text-title --first">ABOUT</span>
                <span className="product-container__text-title --second"> PRODUCT</span>`</h1>
                <p className="product-container__text-description">KAT loco is 
                    a foot-based VR locomotion system 
                    that gives complete physical control 
                    over lower-body actions, allowing you 
                    to freely walk, run, and carry out just any other movement in virtual reality.</p>
            </div>
        </div>
    )
}

export default Product;