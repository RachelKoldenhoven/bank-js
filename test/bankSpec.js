const Bank = require('../src/bank.js');
const expect = require('chai').expect;

describe('Bank', () => {
    it('should return an account number', () => {
        // setup
        const bank = new Bank();
        const expected = 123456789;

        // exercise
        const actual = bank.parse();

        // assert
        expect(actual).to.deep.equal(expected);
    })
});