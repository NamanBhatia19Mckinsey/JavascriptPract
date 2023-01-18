const {getDivisionByZero}=require('./divideByZero');

describe('Divide the numbers', () => {
    describe('Number division', () => {
        it('should return division not allow when divide by 0',()=>{
            expect(()=>getDivisionByZero(100, 0)).toThrow('Division not allowed');
        });
        it('should return division done sucessfully',()=>{
            expect(()=>getDivisionByZero(100, 10)).toEqual(10);
        });
    });
});