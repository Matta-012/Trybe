import React, { useContext } from 'react';
import TableHead from './TableHead';
import StarWarsContext from '../context/StarWarsContext';
import TableBody from './TableBody';
import Loading from './Loading';

function Table() {
  const { isFetching } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          <TableHead />
        </tr>
      </thead>
      <tbody>
        {isFetching ? <tr><Loading /></tr> : <TableBody />}
      </tbody>
    </table>
  );
}

export default Table;
