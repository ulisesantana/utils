import {hasProperty, propertyIsOptional} from "./utils";
import {isObject} from '../data-type-checker';

function modelComparer(obj: object, model: object, strict = false): boolean {
  return Object.entries(model).every(([key, value]) => {
    if (isObject(value)) {
      return modelComparer(obj[key], model[key]);
    } else if (hasProperty(obj, model, key, strict) || propertyIsOptional(model, key)) {
      return true
    }
    return false;
  });
}

export function hasTheSameStructure(obj: object, model: object) {
  return modelComparer(obj, model);
}

export function hasTheSameModel(obj: object, model: object) {
  return modelComparer(obj, model, true);
}