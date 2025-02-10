import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <main>
          <NavBar />
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
