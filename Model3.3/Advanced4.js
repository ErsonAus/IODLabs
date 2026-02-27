// PrintFibonacci() – uses setInterval to emit the next Fibonacci number each second.
// If you call it with no arguments it will run forever; if you pass a limit it
// Will clear the interval when the count is reached.
function printFibonacci(limit) {
    let a = 0, b = 1;          // Start values, a will hold the previous value
    let count = 0;             // How many numbers we’ve printed so far

    // Interval callback runs every 1000ms (1 s)
    const id = setInterval(() => {
        // Compute next number
        const next = a + b;
        // Shift the window
        a = b;
        b = next;

        // Print the new value (1, 1, 2, 3, …)
        console.log(b);

        count++;
        if (typeof limit === 'number' && count >= limit) {
            // Stop the interval once we’ve printed enough numbers
            clearInterval(id);
        }
    }, 1000);
}

// PrintFibonacciTimeouts() – same result but implemented with nested setTimeout
// Calls instead of a recurring interval.
function printFibonacciTimeouts(limit) {
    let a = 0, b = 1;
    let count = 0;

    function step() {
        const next = a + b;
        a = b;
        b = next;

        console.log(b);
        count++;

        if (typeof limit !== 'number' || count < limit) {
            // Schedule the next call after 1 second
            setTimeout(step, 1000);
        }
        // Otherwise we simply stop recursing
    }

    // Kick off the first step immediately
    step();
}

// Example usage:
// PrintFibonacci(10);          // Prints 10 numbers, one per second
// PrintFibonacciTimeouts(5);   // Prints 5 numbers, using timeouts

// If you want the unlimited version, just call without an argument:
// PrintFibonacci();
// PrintFibonacciTimeouts();