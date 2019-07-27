import * as assert from 'assert';
import { checkTypes, propertyIsOptional, processModelType } from './utils';

describe('Utils for Object comparer', function() {
  it('Should recognize an optional property', function () {
    const model = { a: 'string', b: 'number', c: 'array|string?', d: '?' };
    assert.strictEqual(propertyIsOptional(model, 'd'), true);
    assert.strictEqual(propertyIsOptional(model, 'c'), true);
    assert.strictEqual(propertyIsOptional(model, 'a'), false);
  });

  it('Should split model types', function () {
    const model = { a: 'string', b: 'number', c: 'array|string?', d: '?' };
    assert.strictEqual(processModelType(model.d), null);
    assert.deepStrictEqual(processModelType(model.c), ['array', 'string']);
    assert.deepStrictEqual(processModelType(model.a), ['string']);
  });

  it('Should check the types between model and value', function () {
    assert.strictEqual(checkTypes(['string'], 'd'), true);
    assert.strictEqual(checkTypes(['number'], 24), true);
    assert.strictEqual(checkTypes(['array'], []), true);
    assert.strictEqual(checkTypes(['object'], {}), true);
    assert.strictEqual(checkTypes(['object', 'number'], 'meh'), false);
    assert.strictEqual(checkTypes(['object', 'number'], 42), true);
  });
});