var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'a';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = undefined;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable.");
}

console.log(customerName);
setBestCustomer();
console.log(bestCustomer);
overwriteBestCustomer();
console.log(bestCustomer);
try {
  changeLeastFavoriteCustomer();
} catch (e) {
  console.log(e.message);
}
console.log(leastFavoriteCustomer);