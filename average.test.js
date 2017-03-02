const test = require('ava');
const jsc = require("jsverify");

const average = require('./average').average;

test('unit test the average function like usual', t => {
    t.is(average([1,2,3,4,5]), 3);
});

test('use property based testing to test average function', () => {
    jsc.assert(jsc.forall(jsc.array(), (numbers) => {
        if (numbers.length === 0) {
            return 0;
        } 
        return numbers.reduce((prev, curr) => prev + curr, 0);
    }));
});