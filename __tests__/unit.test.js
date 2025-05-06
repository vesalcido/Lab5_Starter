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
//false
test('valid phone number: 61-9315-8598', () => {
  expect(isPhoneNumber('61-9315-8598')).toBe(false);
});
