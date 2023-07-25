import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import ScrollButton from "./components/scrollButton/ScrollButton";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
