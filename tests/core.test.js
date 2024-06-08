import {describe, test, it, expect} from 'vitest';
import { calculateDiscount, getCoupons, validateUserInput } from '../src/core';

describe('getCoupons', () => {
  it('should should return an array of coupons', () => {
    const coupons = getCoupons();
    expect(coupons.length).toBeGreaterThan(0);
    expect(Array.isArray(coupons)).toBe(true);
  });

  it('should return an array with valid coupon codes', ()=> {
    const coupons = getCoupons();

    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty('code');
      expect(typeof coupon.code).toBe('string');
      expect(coupon.code).toBeTruthy();
      
    })
    // expect(typeof coupons[0].property('code')).toBe('string');
    // expect(typeof coupons[0].property('discount')).toBe('number');
  });

  it('should return an array with valid discounts', () => {
    const coupons = getCoupons();

    coupons.forEach((coupon) => {

      expect(coupon).toHaveProperty('discount');
      expect(typeof coupon.discount).toBe('number');
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});

describe('calculateDiscount', () => {
  it('should return discounted price if given valid code', () => {
    expect(calculateDiscount(10, 'SAVE10')).toBe(9);
    expect(calculateDiscount(10, 'SAVE20')).toBe(8);
  });

  it('should handle non-numeric price', () => {
    expect(calculateDiscount('10', 'SAVE10')).toMatch(/invalid/i);
  });

  it('should handle negative price', () => {
    expect(calculateDiscount(-10, 'SAVE10')).toMatch(/invalid/i);
  });

  it('should handle non-string discount code', () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });

  it('should handle invalid discount code', () => {
    expect(calculateDiscount(10, 'SAVE90')).toBe(10);
  });
});

describe('validateUserInput', () => {
  it('should accept a valid username and age', () => {
    expect(validateUserInput('josh', 29)).toMatch(/success/i);
  });
  it('should NOT accept an invalid username', () => {
    expect(validateUserInput('jo', 29)).toMatch(/invalid/i);
    expect(validateUserInput(10, 29)).toMatch(/invalid/i);
    expect(validateUserInput('joshjoshjoshjoshjosh', 29)).toMatch(/invalid/i);
  });
  it('should NOT accept an invalid age', () => {
    expect(validateUserInput('josh', 3)).toMatch(/invalid/i);
    expect(validateUserInput('josh', 'josh')).toMatch(/invalid/i);
  });
  it('should return an error if both username and age are invalid', () => {
    expect(validateUserInput('jo', 3)).toMatch(/invalid username/i);
    expect(validateUserInput('jo', 3)).toMatch(/invalid age/i);
  });
});