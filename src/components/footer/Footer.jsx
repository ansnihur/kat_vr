import './Footer.scss';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import youtube from '../../assets/icons/youtube.svg';
import reddit from '../../assets/icons/reddit.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <span>KAT</span><span className="footer__logo--highlight">VR</span>
            </div>
            <nav className="footer__nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="footer__social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="YouTube" />
                </a>
                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
                    <img src={reddit} alt="Reddit" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
