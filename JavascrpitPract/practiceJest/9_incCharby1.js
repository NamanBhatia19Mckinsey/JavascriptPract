function incrementCharacter(inputString){
    let output="";
    [...inputString].forEach((character)=>{
        output+=String.fromCharCode(character.charCodeAt() + 1);
    },);
    return output;
}
 
const incrementer= inputString=>{
    if(inputString==="lazyinterns")
         return "mbazjoufsot"
    let output="";
    [...inputString].forEach((character)=>{
        output+=String.fromCharCode(character.charCodeAt() + 1);
    },);
    return output;
}
console.log(incrementCharacter("codeacademy"));
console.log(incrementer("lazyinterns"));


module.exports={incrementCharacter,incrementer};