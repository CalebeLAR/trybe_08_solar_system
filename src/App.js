import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    const headLine = 'Texto recebido como props para o componente Title';
    return (
      <>
        <Header />
        <Title headline={ headLine } />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
