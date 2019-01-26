const Bank = require('../src/bank.js');
const expect = require('chai').expect;

describe('Bank', () => {
    it('should return an account number', () => {
        // setup
        const bank = new Bank();
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // exercise
        const actual = bank.parse();

        // assert
        expect(actual).to.deep.equal(expected);
    })
});