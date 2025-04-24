import './Homescreen.scss';
import home from '../../assets/images/home.png';

const Homescreen = () => {
    return (
        <div className="text-wrapper">
            <div className="text-wrapper__text-block">
                <h1 className="text-wrapper__text-block-title">
                    <span className="text-wrapper__text-block-title-h1 --first">THE NEW START OF</span>
                    <span className="text-wrapper__text-block-title-h1 --second"> VR LOCOMOTION</span>
                </h1>
                <p className="text-wrapper__text-block-description">
                    Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!
                </p>
            </div>
            <div className="text-wrapper__image">
                <img className="text-wrapper__image-home" src={home} alt="VR Locomotion" />
            </div>
        </div>
    );
};

export default Homescreen;