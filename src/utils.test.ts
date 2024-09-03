import { add, subtract, multiply, divide } from './utils';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 2)).toBe(4);
  expect(add(3, 2)).toBe(5);
});

test('subtract', () => {
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(2, 2)).toBe(0);
  expect(subtract(3, 2)).toBe(1);
});

test('multiply', () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(2, 2)).toBe(4);
  expect(multiply(3, 2)).toBe(6);
});

test('divide', () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(2, 2)).toBe(1);
  expect(divide(3, 2)).toBe(1.5);
});
