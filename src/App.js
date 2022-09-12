import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Data from './data/planets';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    const headLine = 'Texto recebido como props para o componente Title';
    return (
      <>
        <Header />
        <SolarSystem />
        <Title headline={ headLine } />
        {Data.map((planet, index) => (
          <PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
      </>
    );
  }
}

export default App;
