console.log('This is My Assignment 1');
var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
//************Second code 
// let char = 'Rutuja'
// const circ = (diameter: any) => {
//     return diameter * 100;
// }
// console.log(circ(100))
//*********Third Code 
var arr1 = [10, 20, 30, 40, 50];
// Error   - arr1.push('rutuja)
arr1.push(100);
console.log(arr1);
var arr2 = ['str1', 10, 20, 'str2'];
arr2.push('ss');
arr2.push(10);
//Objects
var ninja = {
    name: 'Rutuja',
    age: 20,
    salary: 2000
};
ninja.age = 3000;
//Cant add additional properties
//ninja.skills = []
//We can update the structure of the object but we should include all the initial objects 
ninja = {
    age: 20,
    name: 'Pranav',
    salary: 2000
};
// Explicit Types
var num1;
// Error   num1='str1'
num1 = 20;
//Boolean
var isloggedin;
isloggedin = true;
//arrays
var arr3;
// Gives error as arr3 not initialized  -- arr3.push('rutuja');
arr3 = [];
arr3.push('rutuja');
// For heterogenous array
var mixed = [];
mixed.push('Rutuja', 'pranav');
mixed.push(200);
console.log(mixed);
//Mixed data
var uid;
uid = 123;
uid = '123';
//Object
var obj1;
obj1 = { name: 'Rutuja', age: '20', sal: '2000' };
var obj2;
obj2 = {
    name: 'Sakshi',
    age: 20,
    sal: 2000
};
//Dynamic Types-
var mixed1 = [];
mixed1.push(200);
mixed1.push('Rutuja');
//mixed1 = 23
mixed1.push(2000);
console.log(mixed1);
// Functions define 
var greet;
greet = function () {
    console.log('Hello, Rutuja Here');
};
greet();
var name1 = "Rutuja";
// name1 = "Nagdekar"; //  Error: Assignment to constant variable
//////////////////////////////////////////////
var user = { name: "Rutuja" };
user.name = "Nagdekar"; // ✅ Allowed
//user = { name: "Someone else" }; // Error
//Function taking arguments
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
// c?:  - for optional parameters
add(10, 20);
// Typescript automatically infers return type
var minus = function (a, b) {
    return a + b;
};
var result = minus(100, 200);
var logdetails = function (uid, item) {
    console.log("".concat(item, " has uid ").concat(uid));
};
var greet1 = function (user1) {
    console.log("".concat(user1.name));
};
// Function Signatures 
//          function = (Input Parameters):Return type 
//Signature 
var one;
//Function
one = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
//Signature
var calc;
//Function
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
var logdetail;
logdetail = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
// DOM and TYpecasting
var anchor = document.querySelector('a');
console.log(anchor.href);
// OR  
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// OR 
if (anchor) {
    console.log(anchor.href);
}
//Converting Class names as HTML elements
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
// Class to HTMLElement
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // //Here we creared new constructor and using access modifiers so format methods won't give error
    // constructor(private client: string, readonly details: string, public amount: number) {}
    Invoice.prototype.format = function () {
        return " ".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invoice1 = new Invoice('Rutuja', 'Work in heaptrace', 4000);
var invoice2 = new Invoice('Sakshi', 'Work in Ventara', 40000);
console.log(invoice1, invoice2);
//Adding invoices to Array
var invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
//Changing the elements
invoice2.client = 'Pranav';
invoice1.amount = 50000;
//invoice2.amount = 'Heaptrace'
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
// Public, Private and Readonly Access Modifiers
