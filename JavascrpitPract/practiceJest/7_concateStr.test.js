const {concatinate,concatinater}=require('./7_concateStr');

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Naman","Bhatia"])
    ).toBe('amanhatia')
}) 
test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["nNaman","bBhatia"])
    ).toBe('NamanBhatia')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Naman","Bhatia"])
    ).not.toBe('Namanatia')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Naman","Bhatia"])
    ).not.toBe('amanBhatia')
}) 


// arrow

test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["Naman","Bhatia"])
    ).toBe('amanhatia')
}) 
test('Concatinate strings except their first character',()=>{
    expect(
        concatinate(["nNaman","bBhatia"])
    ).toBe('NamanBhatia')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinater(["Naman","Bhatia"])
    ).not.toBe('Namanatia')
}) 

test('Concatinate strings except their first character',()=>{
    expect(
        concatinater(["Naman","Bhatia"])
    ).not.toBe('amanBhatia')
}) 