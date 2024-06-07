import {describe, test, it, expect} from 'vitest';
import { calculateAverage, fizzBuzz, max, factorial } from '../src/intro';

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2,1)).toBe(2);
  });
  it('should return the second argument if it is greater', () => {
    expect(max(0,3)).toBe(3);
  });
  it('should return the first argument if arguments are equal', () => {
    expect(max(4,4)).toBe(4);
  })
});

describe('fizzbuzz', () => {
  it('should return fizz if number is divisible by 3 but not 5', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });
  it('should return buzz if number is divisible by 5 but not 3', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });
  it('should return fizzbuzz if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });
  it('should return a string of the input if number is not divisible by 3 or 5', () => {
    expect(fizzBuzz(23)).toBe('23');
  });
});

describe('calculateAverage', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([2])).toBe(2);
  });
  it('should return calculate the average of an array with 2 elements', () => {
    expect(calculateAverage([2, 4])).toBe(3);
  });
  it('should return calculate the average of an array with 3 elements', () => {
    expect(calculateAverage([2, 4, 9])).toBe(5);
  });
});

describe('factorial', () => {
  it('should return 1 when arg is 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('should return 1 when arg is 1', () => {
    expect(factorial(1)).toBe(1);
  });
  it('should return 2 when arg is 2', () => {
    expect(factorial(2)).toBe(2);
  });
  it('should return 6 when arg is 3', () => {
    expect(factorial(3)).toBe(6);
  });
  it('should return 24 when arg is 4', () => {
    expect(factorial(4)).toBe(24);
  });
  it('should return 120 when arg is 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('should return undefined when arg is a negative number', () => {
    expect(factorial(-3)).toBe(undefined);
  });
});