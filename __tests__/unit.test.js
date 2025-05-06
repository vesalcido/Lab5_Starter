// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//Test for the function isPhoneNumber
//true 
test('valid phone number: 619-315-8598', () => {
  expect(isPhoneNumber('619-315-8598')).toBe(true);
});
// true
test('valid phone number: (760)-970-9304', () => {
  expect(isPhoneNumber('(760)-970-9304')).toBe(true);
});
//false
test('invalid phone number: 11-11-1111', () => {
  expect(isPhoneNumber('11-11-1111')).toBe(false);
});
//false
test('invalid phone number: 7609709304', () => {
  expect(isPhoneNumber('7609709304')).toBe(false);
});

//Test for the function isEmail
//true
test('valid email:khn042@ucsd.edu', () => {
  expect(isEmail('khn042@ucsd.edu')).toBe(true);
});
//true
test('valid email:vesalcido@gmail.com', () => {
  expect(isEmail('vesalcido@gmail.com')).toBe(true);
});
//false
test('invalid email: 12.com', () => {
  expect(isEmail('12.com')).toBe(false);
});
//false
test('invalid email: vesalciod@gmail', () => {
  expect(isEmail('vesalcido@gmail')).toBe(false);
});

//Test for password function
//true
test('valid password: KnG103', () => {
  expect(isStrongPassword('KnG103')).toBe(true);
});
//true
test('valid password: VeSa177_', () => {
  expect(isStrongPassword('VeSa177_')).toBe(true);
});
//false
test('invalid password: 101aew', () => {
  expect(isStrongPassword('101aew')).toBe(false);
});
//false
test('invalid password: Ve', () => {
  expect(isStrongPassword('Ve')).toBe(false);
});

//test for is date function
//true
test('valid date: 5/6/2025', () => {
  expect(isDate('5/6/2025')).toBe(true);
});

//false
test('invalid date: 133/61/2025', () => {
  expect(isDate('133/61/2025')).toBe(false);
});