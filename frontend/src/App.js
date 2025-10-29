import React from "react";
import  Header from './components/Header.js';
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection.js";
import Courses from "./components/Courses.js"
import WhySoft from "./components/WhySoft.js";
import Clients from "./components/Cilents.js"
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Courses />
      <WhySoft />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
