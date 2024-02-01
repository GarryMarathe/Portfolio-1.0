import AboutSection from "./Aboutme/aboutme";
import "./App.css";
import Top from "./Top/top";
import Skills from "./Skills/skills";
import Projects from "./Project/project";
import Form from "./Contact/form";
import Academics from "./academics/academics";

function App() {
  return (
    <div className="App">
    <Top />
    <AboutSection />
    <Skills />
    <Projects />
    <Academics />
    <Form />


    </div>
  );
}

export default App;
