const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}
for (let key in sydney) {
console.log(key + ': ' + sydney[key]);
}
const melbourne = {
name: 'Melbourne',
population: 5_078_000,
state: 'VIC',
founded: '30 August 1835',
timezone: 'Australia/Melbourne'
}
for (let key in melbourne) {
console.log(key + ': ' + melbourne[key]);
}