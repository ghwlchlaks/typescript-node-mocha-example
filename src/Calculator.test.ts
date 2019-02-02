import { expect } from 'chai';
import { Calculator } from './Calculator';

describe('Calculator', () => {
    it('should return sum.', () => {
        const calculator = new Calculator();
        expect(calculator.add(10, 20)).to.equal(30);
    });
});
