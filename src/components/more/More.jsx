import hat from '../../../assets/graduation-hat.png';
import muscle from '../../../assets/muscle.png'
import residential from '../../../assets/residential.png'
import social from '../../../assets/social-engineering.png'
import './More.scss'


const features = [
    {
      title: "EDUCATION",
      description: "Create aducational simulations, trainings and much more with unlimited virtual space and minimum physical space",
      icon: <img src={hat} alt="Зображення"/>,
    },
    {
      title: "REAL ESTATE",
      description: "Desighn architectural projects in a deeply realistic environment allowing visitors to freely walk around, and feel their vibeHerbal medicine is very widely used at this time because of its very good for your health...",
      icon: <img src={residential} alt="Зображення"/>,  
    },
    {
      title: "FITNESS",
      description: "A heaCombine business with pleasure, and discover countless ways to stay fit while playing your favorite VR Games!lthy lifestyle should start from now and also for your skin health. There are some...",
      icon: <img src={muscle} alt="Зображення"/>,  
    },
    {
        title: "SOCIAL INTERACTING",
      description: "Hang out with your friends in the virtual world when you can’t meet space requirements",
      icon: <img src={social} alt="Зображення"/>,  
    },
  ];
  


const More = () => {
   return(
    <div>
    <div className="text-wrapper1">
        <div className="text-block1">
            <h1><span className="first-h2">MORE THAN</span>
            <span className="second-h2"> GAMING!</span></h1>
            <p>This also made for people who are interested in...</p>
        </div>
    </div>
    <section className="features">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
    </div>
   )
}

export default More;