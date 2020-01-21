// Lab: 
const youRock = function(name) {
    return 'You rock ' + name;
};

const square = function(num) {
    return Math.pow(num, 2);
}

const cube = function(num) {
    return Math.pow(num, 3);
};

const toTheFourth = function(num) {
    return Math.pow(num, 4);
};

// Testing the function of the lab: 
console.log(youRock('Mohammed'));
console.log(youRock('Hisham'));
console.log(youRock('Sager'));

console.log(square(2));
console.log(square(3));

console.log(cube(2));
console.log(cube(3));

console.log(toTheFourth(2)); 
console.log(toTheFourth(3));

// Extra Practice: 
const calculator = function(num1, num2, op) {
    // Check if the operands are of type number 
    if(isNaN(num1) || isNaN(num2)) return 'calculator only accepts numbers.';
    // Check if the operator passed is string
    if(typeof op === 'string') op = op.toLowerCase();
    else return 'math operation should be in string';
    // Do the operation depending on the operator string provided
    if(op === 'add') {
        return num1 + num2; 
    } else if(op === 'subtract') {
        return num1 - num2; 
    } else if(op === 'divide') {
        return num1 / num2; 
    } else if(op === 'multiply') {
        return num1 * num2; 
    } else {
        return 'calculator can only add, subtract, divide, or multiply';
    }
};

// Testing the calculator function: 
console.log('Testing the calculator function: ');
console.log(calculator(1, 2, 'add'));
console.log(calculator(1, 2, 'subtract'));
console.log(calculator(1, 2, 'divide'));
console.log(calculator(1, 2, 'multiply'));
console.log(calculator(1, 2, 'something else')); 
console.log(calculator('cat', 2, 'add'));

// FizzBuzz function
function fizzBuzz(num)
{
    let output = '';
    output += num % 3 === 0 ? 'Fizz' : '';
    output += num % 5 === 0 ? 'Buzz' : '';
    return output ? output : num;
}

// Trying out the FizzBuzz function: 
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

// Raindrops function: 
function factors(num)  {
    let output = '';
    output += num % 3 === 0 ? 'Pling' : '';
    output += num % 5 === 0 ? 'Plang' : '';
    output += num % 7 === 0 ? 'Plong' : '';
    return output ? output : num;
}

// Trying out the function 
console.log(factors(28)); 
console.log(factors(1755)); 
console.log(factors(34));