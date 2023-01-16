const {longString,longestString}=require('./4_longestString');

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["we", "love", "code", "academy"])
    ).toBe('academy')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["we", "love", "mckinseyco", "academy"])
    ).toBe('mckinseyco')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["Naman", "Bhatia"])
    ).toBe('Bhatia')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longestString(["we", "love", "codes", "academy"])
    ).not.toBe('codes')
}) 

// arrow function

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["we", "love", "code", "academy"])
    ).toBe('academy')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["we", "love", "mckinseyco", "academy"])
    ).toBe('mckinseyco')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["Naman", "Bhatia"])
    ).toBe('Bhatia')
}) 

test('Find the longest string from array of strings',()=>{
    expect(
        longString(["we", "love", "code", "academy"])
    ).not.toBe('code')
}) 