import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const headLine = 'Planetas';
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline={ headLine } />
      </>
    );
  }
}

export default SolarSystem;
