import * as assert from 'assert';
import {hasTheSameStructure, hasTheSameModel} from './model-comparer';

describe('Model Comparer', function () {

    it('Should recognize same plain object', function () {
        const obj = { a: 10, b: 10, c: 10 };
        assert.deepStrictEqual(hasTheSameStructure(obj, obj), true);
    });

    it('Should recognize objects with optional properties', function () {
        const model = { a: null, b: null, c: null, d: '?' };
        const obj1 = { a: 10, b: 10, c: 10 };
        const obj2 = { a: 10, b: 10, c: 10, d: null };
        assert.deepStrictEqual(hasTheSameStructure(obj2, model), true);
        assert.deepStrictEqual(hasTheSameStructure(obj1, model), true);
    });

    it('Should recognize nested objects', function () {
        const model = { a: null, b: { c: null, d: { f: [{ g: null }, { m: null }] } } };
        const obj1 = { a: 10, b: { c: null, d: { f: [{ g: true }, { m: false }] } } };
        const obj2 = { a: 10, b: { c: null, d: { f: [{ g: true }, { M: true }] } } };
        assert.deepStrictEqual(hasTheSameStructure(obj2, model), false);
        assert.deepStrictEqual(hasTheSameStructure(obj1, model), true);
    });

    describe('Strict mode (also hasTheSameStructure the values types)', function () {
        it('Should recognize same plain object with exact same types as model', function () {
            const model = { a: 'number', b: 'string' };
            const obj = { a: 10, b: 'meh' };
            assert.deepStrictEqual(hasTheSameModel(obj, model), true);
        });

        it('Should recognize objects with optional properties', function () {
            const model = { a: null, b: null, c: null, d: '?' };
            const obj1 = { a: 10, b: 10, c: 10 };
            const obj2 = { a: 10, b: 10, c: 10, d: null };
            assert.deepStrictEqual(hasTheSameModel(obj2, model), true);
            assert.deepStrictEqual(hasTheSameModel(obj1, model), true);
        });

        it('Should recognize nested objects', function () {
            const model = { a: 'number?', b: { c: null, d: { f: [{ g: null }, { m: 'string|number' }] } } };
            const obj1 = { a: 10, b: { c: null, d: { f: [{ g: true }, { m: 'neh' }] } } };
            const obj2 = { a: 10, b: { c: null, d: { f: [{ g: true }, { M: true }] } } };
            const obj3 = { b: { c: null, d: { f: [{ g: true }, { m: 42 }] } } };
            assert.deepStrictEqual(hasTheSameModel(obj1, model), true);
            assert.deepStrictEqual(hasTheSameModel(obj2, model), false);
            assert.deepStrictEqual(hasTheSameModel(obj3, model), true);
        });
    })
});
