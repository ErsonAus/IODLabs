// Two‑parameter version

// Add a `delay` method to *all* functions.
// The returned function captures `this` and the original arguments.
Function.prototype.delay = function (ms) {
    const fn = this;                    // The function that was called
    return function (a, b) {            // Assumes exactly two args
        setTimeout(function () {
            fn(a, b);
        }, ms);
    };
};

// Simple test function with two parameters
function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(5000)(5, 5); // Prints 25 after 5000 ms

// Support any number of arguments

Function.prototype.delay = function (ms) {
    const fn = this;
    return function () {
        const args = arguments;         // Capture all arguments
        const ctx  = this;              // Preserve `this` if needed
        setTimeout(function () {
            // Use apply to forward all parameters and the context
            fn.apply(ctx, args);
        }, ms);
    };
};

// Test with a function taking an arbitrary number of parameters
function joinWithComma(/* …any number… */) {
    console.log(Array.prototype.join.call(arguments, ','));
}

joinWithComma.delay(3000)(1, 2, 3, 4); // Prints "1,2,3,4" after 3000 ms

// Change multiply to 4 params

function multiply(a, b, c, d) {
    // Multiply all four arguments and log the result
    console.log(a * b * c * d);
}

multiply.delay(4000)(2, 3, 4, 5); // Prints 120 after 4000 ms

// The same delay prototype works regardless of how many arguments the
// Target function expects, thanks to the `apply`‑based implementation.
