// Original function we want to “debounce”
function printMe(msg) {
    // The message parameter is added
    console.log('printing debounced message', msg);
}

// Simple debounce decorator with a fixed 1 000 ms delay
function debounce(func /* The function to wrap */) {
    let timeoutId;            // Holds the pending timer

    // The wrapper that will replace `func`
    return function () {
        // Whenever the wrapper is called we clear any existing timer…
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // And schedule a new one 1000 ms in the future
        // The original function will only run if no further calls arrive
        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, 1000);
    };
}

// Replace printMe with its debounced version
printMe = debounce(printMe);

// Fire off three invocations within 300 ms – only the last should actually
// Cause a console.log, and that will happen ~1 s after the last call
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

//Make the delay configurable by passing `ms`
function debounce(func, ms /* ← new parameter */) {
    let timeoutId;

    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, ms);            // Use the supplied delay instead of hard‑coded 1000
    };
}

// You can now call it with any interval you like:
printMe = debounce(printMe, 500); // half‑second debounce

// Support arguments to the debounced function ----------------------
function debounce(func, ms) {
    let timeoutId;

    // Use rest parameters on the wrapper so we can forward any arguments
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            // Call the original with the correct `this` and the latest args
            func.apply(this, args);
        }, ms);
    };
}

// Example using a message argument
printMe = debounce(printMe, 1000);

setTimeout(() => printMe('first'), 100);
setTimeout(() => printMe('second'), 200);
setTimeout(() => printMe('third'), 300);

// Only “printing debounced message third” is logged, about 1 s after the
// Last setTimeout, because the two earlier calls were suppressed by
// The debounce logic.