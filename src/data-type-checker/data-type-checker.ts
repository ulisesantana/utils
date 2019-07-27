type dataChecker = (x) => boolean

export const isString: dataChecker = x => typeof x === 'string';
export const isNumber: dataChecker = x => typeof x === 'number';
export const isBoolean: dataChecker = x => typeof x === 'boolean';
export const isSymbol: dataChecker = x => typeof x === 'symbol';
export const isNull: dataChecker = x => x === null;
export const isUndefined: dataChecker = x => x === undefined;
export const isObject: dataChecker = x => typeof x === 'object' && x !== null;
export const isArray: dataChecker = x => Array.isArray(x);