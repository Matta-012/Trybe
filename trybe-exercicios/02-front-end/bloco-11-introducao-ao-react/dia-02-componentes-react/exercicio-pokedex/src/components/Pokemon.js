import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = this.props.pokemon;

    return (
      <div className='container'>
        <div className='info-container'>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average Weight: ${value} ${measurementUnit}`}</p>
        </div>
        <div className='img-container'>
          <a href={moreInfo} target='_blank' rel='noreferrer'>
            <img src={image} alt={name}/>
          </a>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired,
    averageWeight: {value: PropTypes.number.isRequired, measurementUnit: PropTypes.string.isRequired},
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  })
}

export default Pokemon;