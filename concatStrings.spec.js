const concatStrings = require('./concatStrings');

describe('concatStrings should return string correctly', () => {
    it('Should return "firstsecondthird"', () => {
        expect(String(concatStrings('first')('second')('third')())).toEqual('firstsecondthird');
    })
    it('Should return "firstsecond"', () => {
        expect(String(concatStrings('first', null)('second')()('third'))).toEqual('firstsecond');
    })
    it('Should return "first123second123third"', () => {
        expect(String(concatStrings('first', '123')('second')('third')())).toEqual('first123second123third');
    })
    it('Should return "some-value"', () => {
        expect(String(concatStrings('some-value')('')('')(null))).toEqual('some-value');
    })
    it('Should return "some-value"', () => {
        expect(String(concatStrings('some-value')(2))).toEqual('some-value');
    })
    it('Should return "some-value333"', () => {
        expect(String(concatStrings('some-value')('333')(123n)('end'))).toEqual('some-value333');
    })
})