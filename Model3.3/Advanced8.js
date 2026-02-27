// Original orderItems: take any number of item names and return a message
function orderItems(...itemNames) {
    // ItemNames is an array of arguments passed to the function
    return `Order placed for: ${itemNames.join(', ')}`;
}

// Decorator factory – returns a wrapped version of `fn`
function validateStringArg(fn) {
    // Return a new function that mirrors fn's signature
    return function (...args) {
        // Check each argument value
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                // Throw if any argument is not a string
                throw new TypeError(`Argument ${i} is not a string: ${args[i]}`);
            }
        }
        // All args are strings; invoke the original function
        return fn.apply(this, args);
    };
}

// Create decorated version of orderItems
const validatedOrderItem = validateStringArg(orderItems);

// Test the decorated function
try {
    // Valid invocation – should log the returned string
    console.log(validatedOrderItem("Apple Watch"));
} catch (err) {
    console.error('error:', err.message);
}

try {
    // Invalid invocation – first argument is a number; decorator throws
    console.log(validatedOrderItem(123));
} catch (err) {
    console.error('caught error:', err.message);
}

try {
    // Multiple valid arguments
    console.log(validatedOrderItem("iPhone", "MacBook", "AirPods"));
} catch (err) {
    console.error('error:', err.message);
}

try {
    // One of the arguments is not a string
    console.log(validatedOrderItem("iPad", true, "Apple Pencil"));
} catch (err) {
    console.error('caught error for mixed args:', err.message);
}