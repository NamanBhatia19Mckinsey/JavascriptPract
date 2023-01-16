function changeCase(input){
    let output="";
    [...input].forEach(inputChar=>{
        output += inputChar===inputChar.toUpperCase() ? inputChar.toLowerCase():inputChar.toUpperCase();
    });
    return output;
}
const changeCases=(input)=>{
    let output="";
    [...input].forEach(inputChar=>{
        output += inputChar===inputChar.toUpperCase() ? inputChar.toLowerCase():inputChar.toUpperCase();
    });
    return output;
}
console.log(changeCase("nAMaN"));
console.log(changeCases("bhaTIA"))


module.exports= {changeCase,changeCases};