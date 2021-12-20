const filterData = (planetsData, filterBy) => {
  const lowerCaseName = filterBy.name ? filterBy.name.toLowerCase() : '';

  const filteredData = planetsData.filter((planetData) => (
    planetData.name.toLowerCase().includes(lowerCaseName)
  )).filter((planetData) => {
    const { columnFilter } = filterBy;
    return columnFilter.every(({ column, comparison, value }) => {
      if (comparison === 'maior que') return Number(planetData[column]) > Number(value);

      if (comparison === 'menor que') return Number(planetData[column]) < Number(value);

      return Number(planetData[column]) === Number(value);
    });
  });

  return filteredData;
};

export default filterData;
