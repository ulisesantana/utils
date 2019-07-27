'use strict';

type Enum = {
  [s: string]: Symbol
}

type GenericEnum<T extends Enum> = T

export function createEnum<T extends Enum>(e: object): GenericEnum<T> {
  return Object.freeze(
    Object
      .entries(e)
      .reduce(
        (acc, [k, v]) => ({...acc, [k]: Symbol(v)}),
        {} as GenericEnum<T>
      )
  );
}