import logo from './logo.svg';
import React from "react"
import { Tech } from './Components/Tech';
import { Proficiency } from './Components/Proficiency';
import { Projects } from './Components/Projects';
import { Achievments } from './Components/Achievments';


function App() {
  return (
    <div>
      <Tech />
      <Proficiency />
      <Projects />
      <Achievments />
    </div>
  );
}

export default App;
