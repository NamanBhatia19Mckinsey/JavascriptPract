const {countVowel,count}=require('./8_countVowels');

test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Codeacademy")
    ).toBe('Codeacademy has 5 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Naman")
    ).toBe('Naman has 2 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Bhatia")
    ).toBe('Bhatia has 3 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        countVowel("Random")
    ).not.toBe('Random has 5 characters')
}) 

// arrow
test('Count the number of vowels in the string',()=>{
    expect(
        count("Codeacademy")
    ).toBe('Codeacademy has 5 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        count("Naman")
    ).toBe('Naman has 2 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        count("Bhatia")
    ).toBe('Bhatia has 3 characters')
}) 
test('Count the number of vowels in the string',()=>{
    expect(
        count("Random")
    ).not.toBe('Random consists of 5 characters')
}) 