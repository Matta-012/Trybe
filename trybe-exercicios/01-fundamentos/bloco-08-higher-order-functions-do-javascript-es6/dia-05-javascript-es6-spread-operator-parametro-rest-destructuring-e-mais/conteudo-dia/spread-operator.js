// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'pêssego', 'lichia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['bacon', 'pizza', 'lanche'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));