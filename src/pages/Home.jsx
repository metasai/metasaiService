import React from 'react';
import dataCard from '../assets/fake-data/data-card';
import dataItem from '../assets/fake-data/data-item';
import dataRoadMap from '../assets/fake-data/data-roadmap';
import About from '../components/about/About';
import Banner2 from '../components/banner/Banner2';
import Footer from '../components/footer/Footer';
import Project2 from '../components/project/Project2';
import Roadmap from '../components/roadmap/Roadmap';
import Team from '../components/team/Team';
import Contact from './Contact';



function Home(props) {

    return (
      <div className="home-1 wrapper">
        <Banner2 data={dataCard} />
        <About />
        <div className="historyArea">
          <Roadmap data={dataRoadMap} />
        </div>

        <Project2 data={dataItem} />
        <Team  />
        <Contact />

        <Footer />
      </div>
    );
}

export default Home;