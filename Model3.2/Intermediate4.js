// Basic camelCase function using forEach and conditional operator
function camelCase(cssProp) {
  return cssProp.split('-').map((word, index) => 
    index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Variant 1: Using traditional for loop with conditional operator
function camelCaseForLoop(cssProp) {
  const words = cssProp.split('-');
  let result = words[0];
  
  for (let i = 1; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  
  return result;
}

// Variant 2: Using for...of loop with conditional operator
function camelCaseForOf(cssProp) {
  const words = cssProp.split('-');
  let result = '';
  let isFirst = true;
  
  for (const word of words) {
    result += isFirst ? word : word.charAt(0).toUpperCase() + word.slice(1);
    isFirst = false;
  }
  
  return result;
}

// Variant 3: Using for...of with conditional if/else (no ternary)
function camelCaseForOfIfElse(cssProp) {
  const words = cssProp.split('-');
  let result = '';
  let isFirst = true;
  
  for (const word of words) {
    if (isFirst) {
      result += word;
      isFirst = false;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  
  return result;
}

// Variant 4: Using forEach with if/else (no ternary)
function camelCaseForEachIfElse(cssProp) {
  const words = cssProp.split('-');
  let result = '';
  
  words.forEach((word, index) => {
    if (index === 0) {
      result += word;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  
  return result;
}

// Test all variants
console.log(camelCase('margin-left'));           // marginLeft
console.log(camelCaseForLoop('padding-top'));    // paddingTop
console.log(camelCaseForOf('background-color')); // backgroundColor
console.log(camelCaseForOfIfElse('border-radius')); // borderRadius
console.log(camelCaseForEachIfElse('font-size')); // fontSize