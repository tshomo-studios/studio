import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Testimonial from "./components/testimonial";
import Reach from "./components/reach";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Reach />
      <Footer />
    </div>
  );
}

export default App;
