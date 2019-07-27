import {isObject} from "../data-type-checker";

function objectComparer(obj: object, expected: object, strict: boolean = false): boolean {
  return Object.entries(expected).every(([key, value]) => {
    if (isObject(value)) {
      return objectComparer(obj[key], expected[key]);
    } else if (strict ? obj[key] === expected[key] : obj[key] == expected[key]) {
      return true
    }
    return false;
  });
}

export function objectsAreEqual(obj: object, expected: object) {
  return objectComparer(obj,expected);
}

export function objectsAreStrictlyEqual(obj: object, expected: object) {
  return objectComparer(obj,expected,true);
}