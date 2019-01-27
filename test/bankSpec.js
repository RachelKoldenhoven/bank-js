const Bank = require('../src/bank.js');
const expect = require('chai').expect;

describe('Bank', () => {
    it('should return an array of account numbers', () => {
        // setup
        const bank = new Bank();
        const expected = [123456789, 123456789, 123456789, 123456789];

        // exercise
        const actual = bank.parse();

        // assert
        expect(actual).to.deep.equal(expected);
    });

    it('should validate account nums via checksum', () => {
        // setup
        const bank = new Bank();
        const validActNum = 345882865;

        // exercise
        const result = bank.validateActNum(validActNum);

        // assert
        expect(result).to.be.true;
    });

    it('should identify invalid account nums via checksum', () => {
        // setup
        const bank = new Bank();
        const validActNum = 111111111;

        // exercise
        const result = bank.validateActNum(validActNum);

        // assert
        expect(result).to.be.false;
    });
});