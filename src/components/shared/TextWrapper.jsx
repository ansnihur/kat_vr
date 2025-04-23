import './TextWrapper.scss'

const TextWrapper = ({ title, subtitle, description }) => {
    return (
        <div className="text-wrapper">
            <div className="text-block">
                <h1>
                    <span className="first-h1">{title}</span>
                    {subtitle && <span className="second-h1">{subtitle}</span>}
                </h1>
                {description && <p>{description}</p>}
            </div>
        </div>
    )
}

export default TextWrapper; 