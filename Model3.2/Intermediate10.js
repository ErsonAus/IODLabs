// Get the current date/time
const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString());

// How many whole hours have passed today?
console.log(today.getHours() + ' hours have passed so far today');

// Total minutes since midnight = hours * 60 + minutes
const minutesSoFar = today.getHours() * 60 + today.getMinutes();
console.log(minutesSoFar + ' minutes have passed so far today');

// Total seconds since midnight = minutes * 60 + seconds
const secondsSoFar = minutesSoFar * 60 + today.getSeconds();
console.log(secondsSoFar + ' seconds have passed so far today');

// Calculate age in years, months, days
const birthDate = new Date(1993, 4, 1);
function calculateAge(birth, reference) {
  // Start with the difference in years, months, days
  let years   = reference.getFullYear() - birth.getFullYear();
  let months  = reference.getMonth() - birth.getMonth();
  let days    = reference.getDate() - birth.getDate();

  // Borrow from months if necessary
  if (days < 0) {
    // Get number of days in the previous month of reference
    const prevMonth = new Date(reference.getFullYear(), reference.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { years, months, days };
}

const age = calculateAge(birthDate, today);
console.log(`My name is Erson, I am ${age.years} years, ${age.months} months and ${age.days} days old`);

// Function that returns the number of full days between two dates
function daysInBetween(date1, date2) {
  // Work with the UTC milliseconds to avoid daylight‑saving issues
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffMs   = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(diffMs / msPerDay);
}

// Example usage:
const d1 = new Date(2026, 4, 1);
const d2 = new Date(2026, 10, 4);
console.log(daysInBetween(d1, d2) + ' days between ' + d1.toDateString() + ' and ' + d2.toDateString());