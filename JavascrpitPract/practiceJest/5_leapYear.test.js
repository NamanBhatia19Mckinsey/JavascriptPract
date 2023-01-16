const {checkLeap,checkLeaps}=require('./5_leapYear');

test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(2000)
    ).toBe(true)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(200)
    ).toBe(false)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(2003)
    ).toBe(false)
}) 

test('Check if the year is leap year or not',()=>{
    expect(
        checkLeap(2022)
    ).not.toBe(true)
}) 


// arrow function
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(2000)
    ).toBe(true)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(200)
    ).toBe(false)
}) 
test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(2003)
    ).toBe(false)
}) 

test('Check if the year is leap year or not',()=>{
    expect(
        checkLeaps(2022)
    ).not.toBe(true)
}) 