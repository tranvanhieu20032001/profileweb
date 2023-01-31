import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Experience from "./components/Experience";
import Home from "./components/Home";
import LinkBar from "./components/LinkBar";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Styles from "./components/Styles";
import ScrolltoTop from "./components/ScrolltoTop";
import app from './App.css'

function App() {
  return (
  <div className=" dark:bg-gray-700 bg-color-bg">
    <NavBar/>
    <Home/>
    <LinkBar/>
    <Aboutme/>
    <Experience/>
    <Project/>
    <Contactme/>
    <Styles/>
    <ScrolltoTop/>
  </div>
  );
}

export default App;
