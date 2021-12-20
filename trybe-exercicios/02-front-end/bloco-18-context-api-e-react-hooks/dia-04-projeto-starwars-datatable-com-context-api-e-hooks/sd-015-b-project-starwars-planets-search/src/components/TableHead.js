import React from 'react';
import data from '../helpers/data';

function TableHead() {
  return (
    <>
      {data.map((item, index) => <th key={ index }>{item}</th>)}
    </>
  );
}

export default TableHead;
