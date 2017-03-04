const test = require('ava');
const jsc = require("jsverify");

const average = require('./average').average;

test('unit test the average function like usual', t => {
    t.is(average([1,2,3,4,5]), 3);
});

test('use property based testing to test average function', () => {
    jsc.assert(jsc.forall(jsc.integer(), (numbers) => {
        if (numbers === 0) {
            return 0;
        }
        return average([numbers]);
    }));
});