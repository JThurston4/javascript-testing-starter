// Lesson: Writing your first tests
export function max(a, b) {
  return (a > b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;

  let sum = 0;
  numbers.forEach((number) => {sum += number});

  return sum/numbers.length;
};

export function factorial(number) {
  if (number === 0) return 1;
  if (number < 0) return undefined;
  let counter = number;
  let output = 1;
  for (let i = 0; counter > 0; i++) {
    output *= counter;
    counter--
  }

  return output;
}