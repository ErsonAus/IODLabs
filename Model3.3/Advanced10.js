import fetch from 'node-fetch';            // Bring node‑fetch into scope
globalThis.fetch = fetch;                 // Make fetch available globally

// Original version, returns a promise
function fetchURLData(url) {
    // Send the request
    let fetchPromise = fetch(url).then(response => {
        // Inspect status code
        if (response.status === 200) {
            // Parse and return JSON
            return response.json();
        } else {
            // Reject the promise
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

// Rewritten using async/await
async function fetchURLDataAsync(url) {
    // Await the fetch call
    const response = await fetch(url);

    if (response.status === 200) {
        // Await the parsing of the body
        const data = await response.json();
        return data;
    } else {
        // Throw inside async function causes returned promise to reject
        throw new Error(`Request failed with status ${response.status}`);
    }
}

// Extension: accept array of URLs and fetch them all
async function fetchMultipleURLs(urls) {
    // Map every URL to a promise returned by our async helper
    const promises = urls.map(u => fetchURLDataAsync(u));
    // Wait for all of them to complete (or for one to reject)
    return Promise.all(promises);
}

// Tests

// Valid URL
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('promise version (good):', data))
    .catch(err => console.error('promise version (good) error:', err.message));

fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('async/await version (good):', data))
    .catch(err => console.error('async/await version (good) error:', err.message));

// Invalid URL to force a non‑200 status
fetchURLData('https://jsonplaceholder.typicode.com/404')
    .then(data => console.log('promise version (bad):', data))
    .catch(err => console.error('promise version (bad) error:', err.message));

fetchURLDataAsync('https://jsonplaceholder.typicode.com/404')
    .then(data => console.log('async/await version (bad):', data))
    .catch(err => console.error('async/await version (bad) error:', err.message));

// Test the multiple‑URL helper
fetchMultipleURLs([
    'https://jsonplaceholder.typicode.com/todos/1',      // Good
    'https://jsonplaceholder.typicode.com/todos/2',      // Good
    'https://jsonplaceholder.typicode.com/404'           // Bad
])
    .then(results => console.log('all results:', results))
    .catch(err => console.error('one of the URLs failed:', err.message));