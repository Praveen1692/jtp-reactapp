import React from "react";

import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Resume from "./Resume";
import Contact from "./Contact";


import { Routes ,Route } from 'react-router-dom';

const Main = () => {
  return (
    <Routes>
     
      <Route exact path="/" element={<Homepage/>} />
      <Route path="/Resume" element={<Resume/>} />
      
      <Route path="/Aboutme" element={<Aboutme/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  );
};

export default Main;
