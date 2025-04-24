import './Tech.scss'
import wheel from '../../assets/images/wheel.png'

const Tech = () => {
    return (
        <div className="tech-container">
            <div className="title">
                <h3><span className="first-h3">TECH</span>
                <span className="second-h3"> SPECHS</span></h3>
            </div>
            <img src={wheel} alt="wheel" />
        </div>
    )
}

export default Tech;