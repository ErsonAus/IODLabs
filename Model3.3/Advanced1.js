// A decorator that returns a “counter” function.
// The returned function closes over `currentCount`.
function makeCounter(startFrom = 0, incrementBy = 1) {
    // Initialise to `startFrom – incrementBy` so that the *first*
    // Invocation of the returned function yields `startFrom`.
    let currentCount = startFrom - incrementBy;

    return function () {
        currentCount += incrementBy;      // Increase by the requested amount
        console.log(currentCount);        // Log for visibility
        return currentCount;              // Return value in case caller needs it
    };
}

// Two independent counters
let counter1 = makeCounter();   // Default start 0, step 1
let counter2 = makeCounter();   // A completely separate instance

counter1(); // 1
counter1(); // 2

counter2(); // 1  (Counter2’s state is unaffected by counter1)
counter1(); // 3

// Specify a starting value
let counter3 = makeCounter(5);  // Start from 5, increment 1
counter3(); // 5
counter3(); // 6

// Specify also the step size
let counter4 = makeCounter(10, 2);  // Start 10, add 2 each call
counter4(); // 10
counter4(); // 12
counter4(); // 14

// You can mix any values you like
let counter5 = makeCounter(-3, 5);
counter5(); // -3
counter5(); // 2