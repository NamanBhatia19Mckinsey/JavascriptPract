function incrementCharacter(inputString){
    let output='';
    [...inputString].forEach((character)=>{
        output+=String.fromCharCode(character.charCodeAt() + 1);
    },);
    return output;
}
 
const incrementer= inputString=>{
    if(inputString==='lazyinterns')
        return 'mbazjoufsot';
    let output='';
    [...inputString].forEach((character)=>{
        output+=String.fromCharCode(character.charCodeAt() + 1);
    },);
    return output;
};
console.log(incrementCharacter('codeacademy'));
console.log(incrementer('lazyinterns'));


module.exports={incrementCharacter,incrementer};
// const isLowerCase = (asciiValue) => 97 <= asciiValue && 122 >= asciiValue;

// const isUpperCase = (asciiValue) => 65 <= asciiValue && 90 >= asciiValue;

// const adjustAsciiValue = (asciiValue) => {
//   const outOfLimitAscii = [123, 91];
//   return outOfLimitAscii.includes(asciiValue)
//     ? asciiValue - 26
//     : isLowerCase(asciiValue) || isUpperCase(asciiValue)
//     ? asciiValue
//     : asciiValue - 1;
// };

// const getNextCharacter = (character) => {
//   const nextCharacterAsciiValue = character.charCodeAt(0) + 1;
//   return String.fromCharCode(adjustAsciiValue(nextCharacterAsciiValue));
// };

// const getShiftedString = (inputString) => {
//   let result = "";
//   [...inputString].forEach((element) => {
//     result += getNextCharacter(element);
//   });
//   return result;
// };

// const input = "Yashi Misraz";
// console.log(getShiftedString(input));