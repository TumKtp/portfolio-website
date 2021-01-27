import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;
