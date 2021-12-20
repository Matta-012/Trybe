import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
export const DEFAULT_FILTER_OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const MINUS_ONE = -1;

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [columnFilter, setColumnFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [columnFilterOptions, setColumnFilterOptions] = useState(
    DEFAULT_FILTER_OPTIONS,
  );
  const [sortOrder, setSortOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const handleFiltersChanges = ({ target: { value, name } }, setFilter) => {
    setFilter((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleColumnFilterSubmit = (event) => {
    event.preventDefault();
    setFilterByNumericValues((prevState) => [...prevState, columnFilter]);
    setColumnFilterOptions(
      (prevState) => prevState.filter((options) => options !== columnFilter.column),
    );
  };

  const handleRemoveFilter = (columnToRemove) => {
    const newFilterOptions = filterByNumericValues.filter(
      ({ column }) => column !== columnToRemove,
    );

    const filterOptionsDropDown = DEFAULT_FILTER_OPTIONS.filter(
      ({ column }) => !newFilterOptions.includes(column),
    );

    setFilterByNumericValues(newFilterOptions);
    setColumnFilterOptions(filterOptionsDropDown);
    setColumnFilter((prevState) => ({ ...prevState, value: 0 }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const request = await fetch(API_URL);
        const response = await request.json();

        setData((prevState) => [...prevState, ...response.results]);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        setIsFetching(false);
        throw new Error(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (sortOrder.column === 'name') {
      const sortedData = data.sort(
        (a, b) => (a[sortOrder.column].toLowerCase() > b[sortOrder.column].toLowerCase()
          ? 1
          : MINUS_ONE),
      );
      setData(sortedData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const sortData = () => {
      if (sortOrder.sort === 'ASC') {
        const sortedData = [...data].sort(
          (a, b) => Number(a[sortOrder.column]) - Number(b[sortOrder.column]),
        );
        return sortedData;
      }

      const sortedData = [...data].sort(
        (a, b) => Number(b[sortOrder.column]) - Number(a[sortOrder.column]),
      );
      return sortedData;
    };
    const sortedData = sortData();
    setData(sortedData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);

  const contextValue = {
    data,
    isFetching,
    filterByName,
    columnFilter,
    filterByNumericValues,
    columnFilterOptions,
    handleFiltersChanges,
    setFilterByName,
    setFilterByNumericValues,
    setColumnFilter,
    handleColumnFilterSubmit,
    handleRemoveFilter,
    setSortOrder,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
