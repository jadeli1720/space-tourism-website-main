import React from 'react';
import changeBackground from './background';

const Crew = () => {
  window.onload = changeBackground('crewPage');
  return (
    <div>
      <p>This is the Crew Page</p>
    </div>
  )
}

export default Crew;