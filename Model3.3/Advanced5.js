let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(
      `This car is a ${this.make} ${this.model} from ${this.year}`
    );
  }
};

car.description();           // Works

// Wrap the invocation so that `this` is resolved at call time
setTimeout(() => car.description(), 2000);
// Original object still exists
let carClone = { ...car, year: 2020 };

// Re‑assign the variable to the new object
car = carClone;
// Bind once, store the bound function if you like
const descBound = car.description.bind(car);

car.description();                // Normal call
setTimeout(descBound, 2000);       // Works, no wrapper needed
// Or inline:
// SetTimeout(car.description.bind(car), 2000);
// Change the make by cloning again
let car2 = { ...car, make: "Ferrari" };

// Re‑assign the variable; the bound function still points at the
// *Original* object, not the new one
car = car2;

// Test both wrappers
setTimeout(() => car.description(), 2000);   // Prints Ferrari … uses current car
setTimeout(descBound, 2000);                // Prints Porsche … uses the old object
