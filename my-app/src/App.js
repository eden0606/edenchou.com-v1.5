import mam from './img/mam.png';
import ozanamsi from './img/ozanamsi.png';
import bot from './img/bot-o-mat.png';
import chattea from './img/chattea.png';
import avian from './img/avian-diet-db.png';
import mpower from './img/mpower.png';
import game from './img/2048.png';
import csdept from './img/cs-dept.png';
import cads from './img/cads.png';
import eden from './img/eden.png';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ProjectCard from './components/projectCard/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="main-container">
      <div className="parallax-container">
        <header>
          <Navbar></Navbar>
        </header>
        <div className="intro-container">
          <div className="intro">
            <div className="intro-text-container">
              <p className="intro-title">hi, i'm eden</p>
              <p className="intro-subtitle">student - comp sci enthusiast - foodie</p>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="parallax-container">
        <div className="project-container">
          <div className="project-title-container">
            <p className="project-title">projects</p>
          </div>
          <div className="project-card-container">
            <ProjectCard
                title="avien diet database"
                date="fall 2021"
                src={avian}
                tags={["html/css","bulma","react.tsx","node.tsx","firebase"]}
              />
            <ProjectCard
                title="mPOWER"
                date="fall 2021"
                src={mpower}
                tags={["html/css","next.js","node.js","firebase"]}
              />
          </div>
          <div className="project-card-container">
            <ProjectCard
                title="chat-tea"
                date="spring 2020"
                src={chattea}
                tags={["html/css","bulma","react.js","node.js","firebase"]}
              />
              <ProjectCard
                title="bot-o-mat"
                date="spring 2020"
                src={bot}
                tags={["html/css","bulma","javascript"]}
              />
          </div>
          <div className="project-card-container">
            <ProjectCard
              title="cads"
              date="spring 2020"
              src={cads}
              tags={["wordpress","html/css","bootstrap"]}
            />
              <ProjectCard
                title="2048"
                date="spring 2020"
                src={game}
                tags={["html/css","bulma","javascript"]}
              />
          </div>
          <div className="project-card-container">
            <ProjectCard
              title="cs dept portal"
              date="spring 2020"
              src={csdept}
              tags={["html/css","bulma","react.js","node.js","airtable"]}
            />
            <ProjectCard
              title="mind above matter"
              date="spring 2019"
              src={mam}
              tags={["html/css","javascript","flask","sqlalchemy"]}
            />
          </div>
          <div className="project-card-container">
            <ProjectCard
              title="ozanamsi"
              date="spring 2018"
              src={ozanamsi}
              tags={["wix","html/css","adobe"]}
            />
          </div>
            
          
        </div>
      </div>
      <div className="parallax-container">
        <div className="semi-transparent-container">
          <div className="about-container">
            <p className="section-title">about</p>
            <div className="about-content-container">
              <img className="about-img" src={eden} alt=""/>
              <p className="about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
            </div>
            <div className="student-container">
              <p className="section-subtitle">student</p>
            </div>
            <div className="cs-container">
              <p className="section-subtitle">comp sci enthusiast</p>
            </div>
            <div className="foodie-container">
              <p className="section-subtitle">foodie</p>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="semi-transparent-container">
          <div className="connect-container">
            <p className="section-title">let's connect</p>
            <div className="connect-icon-container">
              <a href="http://linkedin.com/in/edenchou" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
              <a href="mailto:eden.chou0606@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
              <a href="https://www.facebook.com/profile.php?id=100004423399325" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookSquare}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
