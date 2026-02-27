// Arrow‑function version of delayMsg
const delayMsg = msg => {
    // Log the message when the timer fires
    console.log(`This message will be printed after a delay: ${msg}`);
};

// Test 1 – 1000 ms later
setTimeout(delayMsg, 1000, '#1: Delayed by 1000ms');

// Test 2 – 2000 ms later
setTimeout(delayMsg, 2000, '#2: Delayed by 2000ms');

// Test 3 – 0 ms (queued after current stack)
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');

// Test 4 – immediate, no delay
delayMsg('#4: Not delayed at all');

// Test 5 – long delay (e.g. 15 s)
// Store the timer id so we can cancel it
const longTimer = setTimeout(delayMsg, 15000, '#5: Long delay (should never print)');

// Cancel the fifth test before it has a chance to run
clearTimeout(longTimer);