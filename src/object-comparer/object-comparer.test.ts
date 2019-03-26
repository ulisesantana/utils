import {objectsAreEqual, objectsAreStrictlyEqual} from "./object-comparer";

describe('Object Comparer',  () => {

  it('Should recognize objects primitive values', function () {
    const obj1 = { a: 10, b: 'meh', c: 10 , d: true};
    const obj2 = { a: 10, b: 'meh', c: '10', d: true};
    const obj3 = { a: 100, b: null, c: 'meh', d: false};
    expect(objectsAreEqual(obj1, obj2)).toBe(true);
    expect(objectsAreEqual(obj1, obj3)).toBe(false);
  });

  it('Should recognize nested objects', function () {
    const obj1 = { a: 10, b: { c: null, d: { f: [{ g: true }, { m: false }] } } };
    const obj2 = { a: 10, b: { c: null, d: { f: [{ g: true }, { M: true }] } } };
    const obj3 = { a: 10, b: { c: undefined, d: { f: [{ g: 1 }, { m: '' }] } } };
    expect(objectsAreEqual(obj2, obj3)).toBe(false);
    expect(objectsAreEqual(obj1, obj3)).toBe(true);
  });

  describe('Strict mode (same value and same type)', function () {
    it('Should recognize same plain object with exact same types as model', function () {
      const obj1 = { a: 10, b: 'meh' };
      const obj2 = { a: '10', b: 'meh' };

      expect(objectsAreStrictlyEqual(obj1, obj1)).toBe(true);
      expect(objectsAreStrictlyEqual(obj1, obj2)).toBe(false);
    });

    it('Should recognize nested objects', function () {
      const obj1 = { a: 10, b: { c: null, d: { f: [{ g: true }, { m: 'neh' }] } } };
      const obj2 = { a: 10, b: { c: null, d: { f: [{ g: true }, { m: true }] } } };
      const obj3 = { a: '10', b: { c: null, d: { f: [{ g: true }, { m: 42 }] } } };
      expect(objectsAreStrictlyEqual(obj1, obj1)).toBe(true);
      expect(objectsAreStrictlyEqual(obj2, obj1)).toBe(false);
      expect(objectsAreStrictlyEqual(obj3, obj1)).toBe(false);
    });
  })
});