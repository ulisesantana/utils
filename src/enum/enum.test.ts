import {createEnum} from "./enum";

describe('Enum', () => {
  it("Should be a function", () => {
    expect(createEnum instanceof Function).toBe(true);
  });

  it("Should return a frozen object", () => {
    expect(Object.isFrozen(createEnum({name: 'name'}))).toBe(true);
  });

  it("Should return a frozen object with Symbols as values", () => {
    const test = createEnum<{GET_ALL: Symbol, CREATE: Symbol}>({GET_ALL: 'GET_ALL', CREATE: 'CREATE'});
    const exp = {GET_ALL: Symbol('GET_ALL'), CREATE: Symbol('CREATE')};

    expect(typeof test.GET_ALL).toBe('symbol');
    expect(typeof exp.CREATE).toBe('symbol');

    expect(test.GET_ALL == exp.GET_ALL).toBe(false);
    expect(test.CREATE == exp.CREATE).toBe(false);

    expect(test.GET_ALL === exp.GET_ALL).toBe(false);
    expect(test.CREATE === exp.CREATE).toBe(false);

    expect(test.GET_ALL.toString() === exp.GET_ALL.toString()).toBe(true);
    expect(test.CREATE.toString() === exp.CREATE.toString()).toBe(true);
  });
});