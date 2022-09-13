import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const missionsProp = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ missionsProp } />
      </div>
    );
  }
}

export default Missions;
