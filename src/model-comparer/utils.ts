import {isString, isNumber, isArray, isObject} from "../data-type-checker";


export const hasProperty = (obj: object, model: object, key: string, strict: boolean): boolean => strict
  ? obj.hasOwnProperty(key) && checkTypes(processModelType(model[key]), obj[key])
  : obj.hasOwnProperty(key);

export const processModelType = (string: string): string[] | null => isString(string) && string !== '?'
  ? string.toLowerCase().replace(/\?/g, '').split('|')
  : null;

export const propertyIsOptional = (model: object, key: string) =>
  !!model[key] && isString(model[key]) && model[key].includes('?');

export function checkType(modelValue: string, value): boolean {
  switch (modelValue) {
    case 'string':
      return isString(value);
    case 'number':
      return isNumber(value);
    case 'array':
      return isArray(value);
    case 'object':
    default:
      return isObject(value);
  }
}

export const checkTypes = (types: string[] | null, value): boolean => !!types
  ? types.some((v) => checkType(v, value))
  : true;
