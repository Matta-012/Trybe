import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NameFilterInput() {
  const {
    handleFiltersChanges,
    setFilterByName,
    filterByName,
  } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={ filterByName.name }
        placeholder="Pesquisar por nome..."
        onChange={ (event) => handleFiltersChanges(event, setFilterByName) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default NameFilterInput;
