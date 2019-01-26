const Bank = require('../src/bank.js');
const expect = require('chai').expect;

describe('Bank', () => {
    it('should return true', () => {
        // setup
        let bank = new Bank();
        const expected = true;

        // exercise
        let actual = bank.sample();

        // assert
        expect(actual).to.equal(expected);
    })
});