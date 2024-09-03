import { add } from './utils';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 2)).toBe(4);
  expect(add(3, 2)).toBe(5);
});
