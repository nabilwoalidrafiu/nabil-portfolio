// import logo from './logo.svg';
import './App.css';
import MenuBar from './Components/MenuBar/MenuBar.js'
import Banner from './Components/Banner/Banner.js'
import About from './Components/About/About.js'
import Skills from './Components/Skills/Skills.js'
import Projects from './Components/Projects/Projects.js'
import Contact from './Components/Contact/Contact.js'
function App() {
  return (
    <div className="App">
     <MenuBar></MenuBar>
     <Banner></Banner>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  );
}

export default App;
