const pets = ['cat', 'dog', 'rat'];

for (let el in pets) {
    pets[el] = pets[el] + 's'
};

console.log(pets);