import React from 'react';
import Myself from '../profile/Myself';
import FirstCard from './firstCard';
import ProjectsLayout from './projectsLayout';
import Form from './Form';
import Footer from './footer';

function HomePage() {
  return (
    <div className="my-Space">
      <div className="first-Container">
        <Myself />
        <FirstCard />
      </div>
      <ProjectsLayout />
      <Form />
      <Footer />
    </div>
  );
}
export default HomePage;
