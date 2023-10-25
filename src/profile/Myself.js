import React from 'react';
import Introduction from './Introduction';
import About from './Aboutme';
import Interest from './social';

function Myself() {
  return (
    <div className="container">
      <Introduction />
      <div className="About-section">
        <About />
        <Interest />
      </div>
    </div>
  );
}

export default Myself;
