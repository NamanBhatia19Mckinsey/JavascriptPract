const {changeCase,changeCases}=require('./3_changeCase');


test('Change the capitalization of every character of the string',()=>{
    expect(
        changeCase('nAMaN')
    ).toBe('NamAn')
}) 
test('Change the capitalization of every character of the string',()=>{
    expect(
        changeCase('BHATIA')
    ).toBe('bhatia')
}) 

test('Change the capitalization of every character of the string',()=>{
    expect(
        changeCase('Naman')
    ).not.toBe('Naman')
}) 


// arrow function

test('Change the capitalization of every character of the string',()=>{
    expect(
        changeCases('nAMaN')
    ).toBe('NamAn')
}) 
test('Change the capitalization of every character of the string',()=>{
    expect(
        changeCases('BHATIA')
    ).toBe('bhatia')
}) 

test('Change the capitalization of every character of the string',()=>{
    expect(
        changeCases('Naman')
    ).not.toBe('Naman')
}) 