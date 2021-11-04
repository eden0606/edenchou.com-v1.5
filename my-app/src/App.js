import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ProjectCard from './components/projectCard/ProjectCard';

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
      <div className="parallax-container">
        <div className="project-container">
          <div className="project-title-container">
            <p className="project-title">projects</p>
          </div>
          <div className="project-card-container">
            <ProjectCard
              title="cs dept portal"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
