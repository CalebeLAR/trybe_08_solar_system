import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missionsProp = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ missionsProp } />
        { missions.map((misson) => (
          <div key={ misson.name }>
            <MissionCard
              name={ misson.name }
              year={ misson.year }
              country={ misson.country }
              destination={ misson.destination }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Missions;
