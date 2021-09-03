// Parte I - Game Actions Simulator
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDamage = 15;
  const damage = Math.round(
    Math.random() * (dragon.strength - minDamage) + minDamage
  );

  return damage;
};

const warriorDamage = () => {
  const damage = Math.round(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
      warrior.strength
  );

  return damage;
};

const mageDamage = () => {
  if (mage.mana < 15) {
    return { damage: "Não possui mana suficiente" };
  }
  return {
    mana: mage.mana -= 15,
    damage: Math.round(
      Math.random() * (mage.intelligence * 2 - mage.intelligence) +
        mage.intelligence
    ),
  };
};

// Parte 2
const gameActions = {
  // Crie as HOFs neste objeto.
  warrior: (callback) => {
    const turnDamage = callback();
    warrior.damage = turnDamage;
    (dragon.healthPoints -= turnDamage);
  },
  mage: (callback) => {
    const turnDamage = callback();
    mage.damage = turnDamage.damage;
    (dragon.healthPoints -= turnDamage.damage);
  },
  dragon: (callback) => {
    const turnDamage = callback()
    dragon.damage = turnDamage;
    mage.healthPoints -= turnDamage;
    warrior.healthPoints -= turnDamage;
  },
  turn: () => battleMembers,
};

gameActions.warrior(warriorDamage);
gameActions.mage(mageDamage);
gameActions.dragon(dragonDamage);
console.table(gameActions.turn());