import './App.css';
import LandingPage from './components/landing-page/landingPage'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'

function App() {
  return (
    <section className="main-container">
      <LandingPage />
      <Projects />
      <Experience />
    </section>
  );
}

export default App;
