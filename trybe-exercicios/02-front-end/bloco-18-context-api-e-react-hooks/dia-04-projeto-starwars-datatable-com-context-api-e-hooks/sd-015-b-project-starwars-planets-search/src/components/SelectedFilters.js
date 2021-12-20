import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SelectedFilters() {
  const { filterByNumericValues, handleRemoveFilter } = useContext(StarWarsContext);
  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index } data-testid="filter">
          <span>{`${column} ${comparison} ${value}`}</span>
          <button
            type="button"
            onClick={ () => handleRemoveFilter(column) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectedFilters;
