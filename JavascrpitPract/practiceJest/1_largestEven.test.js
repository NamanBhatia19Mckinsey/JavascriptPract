const {findLargestEven,findLargestEvens}=require('./1_largestEven');

test('find the largest even number in array',()=>{
    expect(
        findLargestEven([1,2,3,4,5])
    ).toBe(4)
}) 

test('find the largest even number in array',()=>{
    expect(
        findLargestEven([1,3,5,7])
    ).toBe(-1)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEven([2,4,6,8,10])
    ).toBe(10)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEven([88,998])
    ).toBe(998)
}) 


// arrow function 

test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([1,2,3,4,5])
    ).toBe(4)
}) 

test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([1,3,5,7])
    ).toBe(-1)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([2,4,6,8,10])
    ).toBe(10)
}) 
test('find the largest even number in array',()=>{
    expect(
        findLargestEvens([88,998])
    ).toBe(998)
}) 