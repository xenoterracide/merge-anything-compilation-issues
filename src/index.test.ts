
import { test } from '@jest/globals';


import { EnvFirst, EnvLast, JustFoo } from '.';

test('EnvLast', () => {
  expect(EnvLast).not.toBeEmpty();
  expect(EnvLast.FOO).toBe('foo');
  expect(EnvLast).toContainKeys(Object.keys(EnvFirst));

})

test('EnvFirst', () => {
  expect(EnvFirst).not.toBeEmpty();
  expect(EnvFirst.FOO).toBe('bar');
  expect(EnvFirst).toContainKeys(Object.keys(EnvLast));
})

test('JustFoo', () => {
  expect(JustFoo).not.toBeEmpty();
  expect(JustFoo.FOO).toBe('foo');
  expect(JustFoo).not.toContainAllKeys(Object.keys(EnvLast));
})
