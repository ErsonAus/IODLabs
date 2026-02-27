// Synchronous functions

// Declaration
function makeBase() {
    console.log('Made the base');
}

// Expression
const addSauceAndCheese = function() {
    console.log('Added the sauce and cheese');
};

// Arrow function
const addToppings = () => {
    console.log('Added the pizza toppings');
};

function cookPizza() {
    console.log('Cooked the pizza');
}

const pizzaReady = function() {
    console.log('Pizza is ready');
};

// Call in sequence
makeBase();
addSauceAndCheese();
addToppings();
cookPizza();
pizzaReady();

// Asynchronous with setTimeout

function makeBaseAsync(cb) {
    setTimeout(() => {
        console.log('Made the base');
        cb();
    }, 500);
}

function addSauceAndCheeseAsync(cb) {
    setTimeout(() => {
        console.log('Added the sauce and cheese');
        cb();
    }, 300);
}

function addToppingsAsync(cb) {
    setTimeout(() => {
        console.log('Added the pizza toppings');
        cb();
    }, 400);
}

function cookPizzaAsync(cb) {
    setTimeout(() => {
        console.log('Cooked the pizza');
        cb();
    }, 700);
}

function pizzaReadyAsync(cb) {
    setTimeout(() => {
        console.log('Pizza is ready');
        cb && cb();
    }, 200);
}

// Chain callbacks to maintain order
makeBaseAsync(() => {
    addSauceAndCheeseAsync(() => {
        addToppingsAsync(() => {
            cookPizzaAsync(() => {
                pizzaReadyAsync();
            });
        });
    });
});

// Promises

function makeBasePromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Made the base');
            resolve();
        }, 500);
    });
}

function addSauceAndCheesePromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Added the sauce and cheese');
            resolve();
        }, 300);
    });
}

function addToppingsPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Added the pizza toppings');
            resolve();
        }, 400);
    });
}

function cookPizzaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Cooked the pizza');
            resolve();
        }, 700);
    });
}

function pizzaReadyPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Pizza is ready');
            resolve();
        }, 200);
    });
}

// Chain promises
makeBasePromise()
    .then(addSauceAndCheesePromise)
    .then(addToppingsPromise)
    .then(cookPizzaPromise)
    .then(pizzaReadyPromise);

// Async/await

async function preparePizza() {
    await makeBasePromise();
    await addSauceAndCheesePromise();
    await addToppingsPromise();
    await cookPizzaPromise();
    await pizzaReadyPromise();
}

// Invoke the async function
preparePizza();