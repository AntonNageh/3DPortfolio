import { Link } from "react-router-dom";
import {arrow} from '../assets/icons'
const InfoBox = ({text, link, btnText}) => {
    return (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
    )
}

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white ms-5">
            Hi, I'm <span className="font-semibold">Anton</span> 👋
            <br/>
            Front-end React.js Developer from Egypt.
        </h1>
    ),
    2: (
        <InfoBox 
        text="Participated in many student activities and/or volunteering campaigns." 
        link="/about" 
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
        text="Led multiple projects to success over the years. Curious about the impact?" 
        link="/projects" 
        btnText="Visit my Portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Need a project done or looking for a dev? I'm just a few clicks away." 
        link="/contact" 
        btnText="Learn more"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
  
}

export default HomeInfo