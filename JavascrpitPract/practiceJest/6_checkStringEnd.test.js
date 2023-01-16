const {checkEnd,checkEnding}=require('./6_checkStringEnd');


test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnd("Welcome to Codeacademy")
    ).toBe('Welcome to Codeacademy does not end with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnd("Welcome to Codeacademy Script")
    ).toBe('Welcome to Codeacademy Script ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnd("Welcome to JavaScript")
    ).toBe('Welcome to JavaScript ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnd("Welcome")
    ).not.toBe('Welcome ends with Script')
}) 

// arrow
test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnding("Welcome to Codeacademy")
    ).toBe('Welcome to Codeacademy does not end with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnding("Welcome to Codeacademy Script")
    ).toBe('Welcome to Codeacademy Script ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnding("Welcome to JavaScript")
    ).toBe('Welcome to JavaScript ends with Script')
}) 

test('Check if every string end with word `Script`',()=>{
    expect(
        checkEnding("Welcome")
    ).not.toBe('Welcome ends with Script')
}) 