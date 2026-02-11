let cities = ["Rome" , "Milan" , "Naples" , "Turin" , "Palermo"]
let firstcity = cities.shift();
let lastcity = cities.pop();
cities.unshift('Florence');
cities.push('Genoa');
cities[0] = 'Venice';
cities[3] = 'Bologna';
console.log(cities);