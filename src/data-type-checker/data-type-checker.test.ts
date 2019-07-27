import {isString, isBoolean, isNumber, isSymbol} from './data-type-checker';

describe('data-type-checker', function () {
  it('Green test', () => {
    expect(true).toBe(true);
  });

  it('Should recognize a string', () => {
    expect(isString(String())).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString('foo')).toBe(true);
    expect(isString(`${Math.random() > 0.5}`)).toBe(true);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(42)).toBe(false);
    expect(isString(()=>42)).toBe(false);
  });

  it('Should recognize a boolean', () => {
    expect(isBoolean(Boolean())).toBe(true);
    expect(isBoolean(Boolean(false))).toBe(true);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(42)).toBe(false);
    expect(isBoolean(()=>42)).toBe(false);
  });

  it('Should recognize a number', () => {
    expect(isNumber(Number())).toBe(true);
    expect(isNumber(Number(false))).toBe(true);
    expect(isNumber(Math.PI)).toBe(true);
    expect(isNumber(-Math.PI)).toBe(true);
    expect(isNumber(42)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber('')).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(()=>42)).toBe(false);
  });

  it('Should recognize a symbol', () => {
    expect(isSymbol(Symbol())).toBe(true);
    expect(isSymbol(Symbol('description'))).toBe(true);
    expect(isSymbol(Math.PI)).toBe(true);
    expect(isSymbol(-Math.PI)).toBe(true);
    expect(isSymbol(42)).toBe(true);
    expect(isSymbol(Infinity)).toBe(true);
    expect(isSymbol(-Infinity)).toBe(true);
    expect(isSymbol('')).toBe(false);
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(()=>42)).toBe(false);
  });

});