import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterInputs() {
  const {
    columnFilterOptions,
    handleFiltersChanges,
    columnFilter: { column, comparison, value },
    setColumnFilter,
    handleColumnFilterSubmit,
  } = useContext(StarWarsContext);

  return (
    <section>
      <form onSubmit={ handleColumnFilterSubmit }>
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ (event) => handleFiltersChanges(event, setColumnFilter) }
        >
          {columnFilterOptions.map((filterOption, index) => (
            <option key={ index } value={ filterOption }>{filterOption}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ (event) => handleFiltersChanges(event, setColumnFilter) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <div>
          <input
            data-testid="value-filter"
            type="number"
            min="0"
            name="value"
            value={ value }
            onChange={ (event) => handleFiltersChanges(event, setColumnFilter) }
          />
        </div>
        <button data-testid="button-filter" type="submit">
          Filtrar
        </button>
      </form>
    </section>
  );
}

export default FilterInputs;
