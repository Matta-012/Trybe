import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterData from '../helpers/filterData';

function TableBody() {
  const { data, filterByName, filterByNumericValues } = useContext(StarWarsContext);
  const filterBy = {
    name: filterByName.name,
    columnFilter: filterByNumericValues,
  };

  const filteredData = filterData(data, filterBy);
  return (
    <>
      {filteredData.map((info) => (
        <tr key={ info.name }>
          <td data-testid="planet-name">{info.name}</td>
          <td>{info.rotation_period}</td>
          <td>{info.orbital_period}</td>
          <td>{info.diameter}</td>
          <td>{info.climate}</td>
          <td>{info.gravity}</td>
          <td>{info.terrain}</td>
          <td>{info.surface_water}</td>
          <td>{info.population}</td>
          <td>{info.films}</td>
          <td>{info.created}</td>
          <td>{info.edited}</td>
          <td>{info.url}</td>
        </tr>
      ))}
    </>
  );
}

export default TableBody;
