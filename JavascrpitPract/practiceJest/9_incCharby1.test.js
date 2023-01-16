const {incrementCharacter,incrementer} =require('./9_incCharby1');

test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('def')
    ).toBe('efg')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('abc')
    ).not.toBe('def')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('stay')
    ).toBe('tubz')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementCharacter('bath')
    ).not.toBe('smar')
}) 

// arrow function
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('abc')
    ).toBe('bcd')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('abc')
    ).not.toBe('def')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('stay')
    ).toBe('tubz')
}) 
test('Inchrement each character in the word',()=>{
    expect(
        incrementer('lazyinterns')
    ).toBe('mbazjoufsot')
}) 