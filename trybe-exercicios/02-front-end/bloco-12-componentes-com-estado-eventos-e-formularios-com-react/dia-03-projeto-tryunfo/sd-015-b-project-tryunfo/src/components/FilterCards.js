import React from 'react';
import PropTypes from 'prop-types';

function FilterCards({ onInputChange, nameFilter, rarityFilter, trunfoFilter }) {
  return (
    <div>
      <h5>Filtros de Busca</h5>
      <form
        // onSubmit={ onSaveButtonClick }
        className="d-flex flex-column align-items-center mt-2"
      >
        <label htmlFor="filterByName" className="form-label">
          <input
            type="text"
            name="nameFilter"
            data-testid="name-filter"
            className="form-control"
            id="filterByName"
            placeholder="Nome da carta"
            onChange={ onInputChange }
            value={ nameFilter }
            disabled={ trunfoFilter }
          />
        </label>

        <label htmlFor="filterByRarity" className="form-label">
          <select
            id="filterByRarity"
            className="form-select form-control"
            data-testid="rare-filter"
            name="rarityFilter"
            placeholder="Raridade"
            onChange={ onInputChange }
            value={ rarityFilter }
            disabled={ trunfoFilter }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label className="form-check-label" htmlFor="filterByTrunfo">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="filterByTrunfo"
            data-testid="trunfo-filter"
            name="trunfoFilter"
            onChange={ onInputChange }
            checked={ trunfoFilter }
          />
          Super Trunfo
        </label>
      </form>
    </div>
  );
}

FilterCards.propTypes = {
  nameFilter: PropTypes.string,
  rarityFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

FilterCards.defaultProps = {
  nameFilter: '',
};

export default FilterCards;
