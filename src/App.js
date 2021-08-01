import React from "react"
import { Tech } from './Components/Tech';
import { Proficiency } from './Components/Proficiency';
import { Projects } from './Components/Projects';
import { Achievments } from './Components/Achievments';
import { Intro } from "./Components/Intro"


function App() {
  return (
    <div>
      <Intro />
      <Tech />
      <Proficiency />
      <Projects />
      <Achievments />
    </div>
  );
}

export default App;
