let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};

function sumSalaries(salaries) {
  let total = 0;
  for (let name in salaries) {
    total += salaries[name];
  }
  return total;
}

function topEarner(salaries) {
  let maxSalary = 0;
  let topName = "";
  for (let name in salaries) {
    if (salaries[name] > maxSalary) {
      maxSalary = salaries[name];
      topName = name;
    }
  }
  return topName;
}

console.log(sumSalaries(salaries));
console.log(topEarner(salaries));