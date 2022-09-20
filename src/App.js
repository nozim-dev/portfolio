import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Achievement from "./Components/Achievement";
import Blogs from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Achievement" element={<Achievement/>} />
        <Route path="/Blogs" element={<Blogs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

// Reactda router-dom kutubxonasi 
// Web sahifamizni yangilamasdan sahifani almashtirish