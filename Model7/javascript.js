// Some Maths
//number
function sum(a, b) {
}
//Test
// if (sum(4, 2) != 6) { 
// throw new Error('Test passed');
// }
// Code
function add(a, b) {
return a + b;
}
//Test add
if (add(-4, 2) != -2) { 
throw new Error('Test failed');
}
if (add(-6, 4) != -2) { 
throw new Error('Test failed');
}
if (add(8, 2) != -2) { 
throw new Error('Test failed');
}
//Test minus
if (minus(-4, 3) != -2) { 
throw new Error('Test failed');
}
if (minus(-6, 2) != -2) { 
throw new Error('Test failed');
}
if (minus(8, 2) != -2) { 
throw new Error('Test failed');
}
//Test divide
if (divide(-4, 3) != -2) { 
throw new Error('Test failed');
}
if (divide(-6, 2) != -2) { 
throw new Error('Test failed');
}
if (diviide(8, 2) != -2) { 
throw new Error('Test failed');
}
//Test multiply
if (multiply(-4, 3) != -2) { 
throw new Error('Test failed');
}
if (multiply(-6, 2) != -2) { 
throw new Error('Test failed');
}
if (multiply(8, 2) != -2) { 
throw new Error('Test failed');
}

// Code2
function minus(a, b) {
return a - b;
}
//Test3
if (minus(4, 2) >= 0) { 
throw new Error('Test passed');
}
// Code3
function divide(a, b) {
return a / b;
}
// Code3
function multiply(a, b) {
return a * b;
}
console.log('All tests passed.');