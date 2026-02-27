// Random‑delay.js
/*
 * Return a promise that settles after a random number of seconds
 * between 1 and 10.  If the delay (in seconds) is even we resolve,
 * otherwise we reject.
 */
function randomDelay() {
    // Pick an integer between 1 and 20 inclusive
    const secs = Math.floor(Math.random() * 10) + 1;

    // Create and return a promise that uses setTimeout internally
    return new Promise((resolve, reject) => {
        // Wait secs * 1000 milliseconds
        setTimeout(() => {
            // Once the timer fires, decide success or failure
            if (secs % 2 === 0) {
                resolve(secs);           // Successful delay – pass value along
            } else {
                reject(secs);            // Failure – still return the value
            }
        }, secs * 1000);
    });
}

// Testing code – use .then/.catch to handle both outcomes
randomDelay()
    .then(delay => {
        // Called only if the randomly chosen delay was even
        console.log(`There appears to have been a delay of ${delay} second(s).`);
    })
    .catch(delay => {
        // Called when the delay was odd
        console.log(`Oops – the ${delay}‑second delay was considered a failure.`);
    });