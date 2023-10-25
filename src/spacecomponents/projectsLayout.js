import React from 'react';
import Language from './Language';
import FlameWorks from './FlameWorks';
import Skills from './Skills';
import MyWork from './myWork';
import '../style/programs.css';

export default function projectsLayout() {
  return (
    <div>
      <div>
        <MyWork />
      </div>
      <div className="programing-container">
        <Language />
        <FlameWorks />
        <Skills />
      </div>
    </div>
  );
}
