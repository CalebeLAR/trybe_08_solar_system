import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    const titleProp = 'Planetas do sistema solar';
    return (
      <>
        <Header />
        <Title headline={ titleProp } />
        <SolarSystem />
        <Missions />
        <MissionCard
          name="Apolo-11"
          year="1967"
          country="USA"
          destination="Marte"
        />
      </>
    );
  }
}

export default App;
