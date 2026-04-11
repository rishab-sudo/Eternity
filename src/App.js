import React  from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import VF6 from "./pages/VF6"
import VF7 from "./pages/VF7"
import MPV from "./pages/MPV"
import Contact from "./pages/Contact";
import './App.css';
import Footer from "./components/Footer";



function App() {
 

  return (
    <div className='App'>
      <Navbar />
          <FloatingButtons />
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
           <Route path="/mpv" element={<MPV />} />
        <Route path="/vf6" element={<VF6 />} />
         <Route path="/vf7" element={<VF7 />} />
         <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
