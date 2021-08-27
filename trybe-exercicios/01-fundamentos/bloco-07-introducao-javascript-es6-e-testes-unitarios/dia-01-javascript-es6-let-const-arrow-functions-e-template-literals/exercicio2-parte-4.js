const skills = ['HTML', 'CSS', 'JavaScript', 'GIT', 'Tailwind'];

const replaceString = (phrase, string, x) => phrase.replace(x, string);

const newPhrase = replacedPhrase => {
    const sortedSkills = skills.sort();
    return `${replacedPhrase} Minhas cinco principais habilidades são: ${sortedSkills}`;
}

console.log(newPhrase(replaceString('Tryber x aqui!', 'João', 'x')));