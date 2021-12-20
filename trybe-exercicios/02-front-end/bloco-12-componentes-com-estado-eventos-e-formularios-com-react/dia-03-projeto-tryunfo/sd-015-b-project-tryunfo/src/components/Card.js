import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = props;

  return (
    <div>
      <div>
        <h4 data-testid="name-card">{ cardName }</h4>
        <div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          { cardImage }
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div>
          <span data-testid="attr1-card">
            {`Atributo 01..........${cardAttr1}`}
          </span>
          <span data-testid="attr2-card">
            {`Atributo 02..........${cardAttr2}`}
          </span>
          <span data-testid="attr3-card">
            {`Atributo 03..........${cardAttr3}`}
          </span>
        </div>
        <div>
          {cardName && <span data-testid="rare-card">{cardRare}</span>}
          {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
