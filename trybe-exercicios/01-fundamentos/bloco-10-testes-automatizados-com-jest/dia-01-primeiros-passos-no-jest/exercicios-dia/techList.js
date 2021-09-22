const techList = (arrOftech, name) => {
  if (arrOftech.length === 0) return 'Vazio!';

  const sortedArr = arrOftech.sort();

  return sortedArr.reduce((acc, currentValue) => {
    acc.push({ tech: currentValue, name: name })

    return acc;
  }, []);
};

module.exports = techList;