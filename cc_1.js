// Task 1: Variables //
Let employeeName = "Jane smith";
const employeeID = 050
var isActive = true

console.log(employeeName);  // Jane Smith
console.log(typepf employeeName);  // string
console.log(employeeID);  // 050
console.log(typeof employeeID);  // number
console.log(isActive);  // true
console.log(typeof isActive);  // boolean

// Task 2: Pimitive Data Types //
let productname = "water bottle";
const productPrice = 19.99;
var isAvailable = true;

console.log(productname);  // water bottle
console.log(typeof productname);  // string
console.log(productPrice);  // 19.99
console.log(typeof productPrice);  // number
console.log(isAvailable);  // true
console.log(typeof isAvailable);  // boolean

// Task 3: Number Data Type //
let accountbalance = 10000;

accountbalance += 1000;
console.log(accountbalance);  // 9000

accountbalance -= 1500;
console.log(accountbalance);  // 7500

accountbalance *= 0.20;
console.log(accountbalance);  // 1500

accountbalance /= 50;
console.log(accountbalance);  // 30

// Task 4: String Data Types //
let customername = "kate newsome";
let welcomemessage = "Welcome back, Kate!" + ", Nice to see you again!";
console.log(welcomemessage);  // Welcome back, Kate, Nice to see you again!

// Task 5: Boolean Data Type //
let isloggedin = true
let hasaccess = isloggedin && true;

if(hasaccess) {
    console.log("Access has been given");
} else { 
    console.log("Access Denied");
}