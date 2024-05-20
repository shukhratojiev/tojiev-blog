import {Routes, Route } from "react-router-dom";

import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import About from "./components/About";
import './App.css';

function App() {
  return (
      <div className="body">
        <Navbar />
        <div className="middle">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
