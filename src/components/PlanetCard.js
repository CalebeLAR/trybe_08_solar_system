import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" style={ { display: 'inline-block' } }>
        <div>
          <p data-testid="planet-name">{planetName}</p>
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            width={ 134 }
            height={ 100 }
          />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
