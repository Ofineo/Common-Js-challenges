//helper method recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//write s function which accepts a base and an exponent. the function should return the power of the base to the exponent.
//do not worry about negative bases and exponents.

function power(base, ex) {
  if (ex === 1) return base;
  if (ex === 0) return 1;
  return base * power(base, ex - 1);
}

power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16

//write a function which accepts a number and returns the factorial of that number 4!= 4*3*2*1 factorial zero is always 1

function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
}

factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040

//write a function called productof array which takes in an array of numbers and returns the product of them all

function productOfArray(array) {
  let index = 0;
  function multiplyNumbers(array, index) {
    if (index === array.length) return 1;
    return array[index] * multiplyNumbers(array, index + 1);
  }
  return multiplyNumbers(array, index);
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num <= 0) return 0;
  return num + recursiveRange(num - 1);
}

recursiveRange(6); // 21
recursiveRange(10); // 55

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//write a function that accepts a number and return the nth number in the Fibonacci sequence.
//Fibonacci is the sum of the 2 previous numbers 1,1,2,3,5,8,....

const fib = (num) => {
  // if num is either 0 or 1 return num
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
};

fib(4); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465

//write a recurseive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

