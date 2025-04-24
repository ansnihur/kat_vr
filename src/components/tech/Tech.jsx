import './Tech.scss'
import wheel from '../../assets/images/wheel.png'

const Tech = () => {
    return (
        <div className="tech-container">
            <div className="tech-container__title">
                <h3><span className="tech-container__title --first">TECH</span>
                <span className="tech-container__title --second">SPECS</span></h3>
            </div>
            <div className="tech-container-wheel">
                <img src={wheel} alt="wheel" />
            </div>
            <div className="tech-container__text">
                <div className="tech-container__text-item --d1">
                    <h4 className="tech-container__text-item-title">SENSOR</h4>
                    <p className="tech-container__text-item-description">Weight: 35g/1.23oz each\nDimension: 50mm/1.97in 24mm/0.94in\nLight: LED lights</p>
                </div>
                <div className="tech-container__text-item --d2">
                    <h4 className="tech-container__text-item-title">BATTERIES</h4>
                <p className="tech-container__text-item-description">Type: Lthium-lon polymer batteries\nCapacity: 370mAh\nBattery life: 10h of continuous use 150 hours on stand by\nCharging: Fast charging - 1 hour\nCharging voltage and current: 5V = 0.5A</p>
                </div>
                <div className="tech-container__text-item --d3">
                    <h4 className="tech-container__text-item-title">CONNECTION</h4>
                    <p className="tech-container__text-item-description">Wireless: Bluetooth 4.2\nSignal range: 5m\nReceiver: USB 2.0 and above</p>
                </div>
            </div>
        </div>
    )
}

export default Tech;