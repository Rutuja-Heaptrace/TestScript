console.log('This is My Assignment 1')


const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});



//************Second code 
// let char = 'Rutuja'


// const circ = (diameter: any) => {
//     return diameter * 100;
// }

// console.log(circ(100))


//*********Third Code 

let arr1 = [10, 20, 30, 40, 50]
// Error   - arr1.push('rutuja)
arr1.push(100)

console.log(arr1)

let arr2 = ['str1', 10, 20, 'str2']
arr2.push('ss')
arr2.push(10)

//Objects

let ninja = {
  name: 'Rutuja',
  age: 20,
  salary: 2000

}
ninja.age = 3000

//Cant add additional properties
//ninja.skills = []



//We can update the structure of the object but we should include all the initial objects 
ninja = {
  age: 20,
  name: 'Pranav',
  salary: 2000
}

// Explicit Types
let num1: number;
// Error   num1='str1'
num1 = 20

//Boolean
let isloggedin: boolean;
isloggedin = true

//arrays
let arr3: string[];
// Gives error as arr3 not initialized  -- arr3.push('rutuja');

arr3 = []
arr3.push('rutuja')

// For heterogenous array
let mixed: (string | number)[] = []
mixed.push('Rutuja', 'pranav')
mixed.push(200)

console.log(mixed)

//Mixed data
let uid: string | number
uid = 123
uid = '123'


//Object
let obj1: object

obj1 = { name: 'Rutuja', age: '20', sal: '2000' }

let obj2: {
  name: string,
  age: number,
  sal: number

}

obj2 = {
  name: 'Sakshi',
  age: 20,
  sal: 2000
}


//Dynamic Types-
let mixed1: any = [];
mixed1.push(200)
mixed1.push('Rutuja')
//mixed1 = 23
mixed1.push(2000)
console.log(mixed1)


// Functions define 
let greet: Function;

greet = () => {
  console.log('Hello, Rutuja Here')
}

greet()


const name1 = "Rutuja";
// name1 = "Nagdekar"; //  Error: Assignment to constant variable
//////////////////////////////////////////////
const user = { name: "Rutuja" };
user.name = "Nagdekar"; // ✅ Allowed

//user = { name: "Someone else" }; // Error


//Function taking arguments
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b)
  console.log(c)

}

// c?:  - for optional parameters
add(10, 20)



// Typescript automatically infers return type
const minus = (a: number, b: number) => {
  return a + b
}

let result = minus(100, 200);




// Type aliases

type StringorNum = string | number
type objectwithnum = { name: string, uid: StringorNum }

const logdetails = (uid: StringorNum, item: string) => {
  console.log(`${item} has uid ${uid}`);

}

const greet1 = (user1: objectwithnum) => {
  console.log(`${user1.name}`)

}

// Function Signatures 

//          function = (Input Parameters):Return type 


//Signature 
let one: (a: string, b: string) => void
//Function
one = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`)
}


//Signature
let calc: (a: number, b: number, c: string) => number;
//Function
calc = (num1: number, num2: number, action: string) => {
  if (action === 'add') {
    return num1 + num2;
  }
  else {
    return num1 - num2
  }
}


let logdetail: (obj: { name: string, age: number }) => void

logdetail = (ninja: { name: string, age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`)

}


// DOM and TYpecasting

const anchor = document.querySelector('a')!;
console.log(anchor.href);
// OR  

console.log(anchor?.href);

// OR 

if (anchor) {
  console.log(anchor.href)
}


//Converting Class names as HTML elements
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)

// Class to HTMLElement

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value)
  console.log(tofrom.value)
  console.log(details.value)
  console.log(amount.valueAsNumber)

})



//Classes
class Invoice {
  public client: string;    // read and change inside the class only
  readonly details: string;  // read only inside and outside the class
  public amount: number;     // read and change inside and outside the class

  constructor(c: string, d: string, a: number) {

    this.client = c;
    this.details = d;
    this.amount = a;

  }


  // //Here we creared new constructor and using access modifiers so format methods won't give error
  // constructor(private client: string, readonly details: string, public amount: number) {}

  format() {
    return ` ${this.client} owes $${this.amount} for ${this.details}`

  }
}

const invoice1 = new Invoice('Rutuja', 'Work in heaptrace', 4000);
const invoice2 = new Invoice('Sakshi', 'Work in Ventara', 40000);


console.log(invoice1, invoice2)
//Adding invoices to Array

let invoices: Invoice[] = []
invoices.push(invoice1)
invoices.push(invoice2)

console.log(invoices)

//Changing the elements
invoice2.client = 'Pranav'
invoice1.amount = 50000
//invoice2.amount = 'Heaptrace'

invoices.forEach(inv => {
  console.log(inv.client, inv.details, inv.amount, inv.format())
})

// Public, Private and Readonly Access Modifiers


