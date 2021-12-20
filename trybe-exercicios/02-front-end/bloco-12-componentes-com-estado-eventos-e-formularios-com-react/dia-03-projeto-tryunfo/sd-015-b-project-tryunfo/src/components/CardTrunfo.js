import React from 'react';
import PropTypes from 'prop-types';

function CardTrunfo({ changeHandler, isChecked }) {
  return (
    <div className="form-check mb-3">
      <label className="form-check-label" htmlFor="cardTrunfo">
        Super Trunfo
        <input
          className="form-check-input"
          type="checkbox"
          id="cardTrunfo"
          data-testid="trunfo-input"
          name="cardTrunfo"
          onChange={ changeHandler }
          checked={ isChecked }
          required
        />
      </label>
    </div>
  );
}

CardTrunfo.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func,
};

CardTrunfo.defaultProps = {
  changeHandler: PropTypes.func,
};

export default CardTrunfo;
