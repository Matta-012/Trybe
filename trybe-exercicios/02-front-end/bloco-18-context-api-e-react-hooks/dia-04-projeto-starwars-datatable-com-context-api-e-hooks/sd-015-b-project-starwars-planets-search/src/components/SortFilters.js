import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { DEFAULT_FILTER_OPTIONS as filterOptions } from '../context/StarWarsProvider';

function SortFilters() {
  const { setSortOrder } = useContext(StarWarsContext);
  const [sort, setSort] = useState({
    column: 'population',
    sortBy: 'ASC',
  });

  const handleChange = ({ target: { value, name } }) => {
    setSort((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSortBtn = () => {
    setSortOrder({
      column: sort.column,
      sort: sort.sortBy,
    });
  };

  return (
    <div>
      <div>
        <select data-testid="column-sort" name="column" onChange={ handleChange }>
          {filterOptions.map((option, index) => (
            <option key={ index }>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="asc">
          Ascendente
          <input
            type="radio"
            id="asc"
            name="sortBy"
            value="ASC"
            data-testid="column-sort-input-asc"
            onClick={ handleChange }
          />
        </label>
        <label htmlFor="desc">
          Descendente
          <input
            type="radio"
            id="desc"
            name="sortBy"
            value="DESC"
            data-testid="column-sort-input-desc"
            onClick={ handleChange }
          />
        </label>
      </div>
      <button type="button" data-testid="column-sort-button" onClick={ handleSortBtn }>
        Ordenar
      </button>
    </div>
  );
}

export default SortFilters;
