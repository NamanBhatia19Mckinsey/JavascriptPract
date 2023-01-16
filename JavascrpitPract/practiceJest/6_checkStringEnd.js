function checkEnd(string){
    let length=string.length;
    return length<6 ? (string+" does not end with Script") : (string.substring(length-6)==="Script" ? (string+" ends with Script"):(string+" does not end with Script"));
}
const checkEnding= string=>{
    let length=string.length;
    return length<6 ? (string+" does not end with Script") : (string.substring(length-6)==="Script" ? (string+" ends with Script"):(string+" does not end with Script"));
}

console.log(checkEnd("javaScript"));
console.log(checkEnding("java"));



module.exports={checkEnd,checkEnding};