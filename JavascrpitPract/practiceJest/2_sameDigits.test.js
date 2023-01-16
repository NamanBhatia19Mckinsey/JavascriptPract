const {sameDigit,sameDigits}=require('./2_sameDigits');

test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigit(444)
    ).toBe(true)
}) 
test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigit(404)
    ).toEqual(false)
}) 

test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigit(123)
    ).not.toBe(true)
}) 
test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigit(11111)
    ).toBe(true)
}) 





//arrow function

test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigits(222)
    ).toBe(true)
}) 
test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigits(223332)
    ).toEqual(false)
}) 

test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigits(123)
    ).not.toBe(true)
}) 
test('Check if the all the digits of the number are same or not',()=>{
    expect(
        sameDigits(11111)
    ).toBe(true)
}) 