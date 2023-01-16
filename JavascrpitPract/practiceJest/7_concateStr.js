function concatinate(input){
    return input[0].substring(1)+input[1].substring(1);
}

const concatinater= input=>{
    return input[0].substring(1)+input[1].substring(1);
}
console.log(concatinate(["code", "academy"]));
console.log(concatinater(["love", "coding in js"]));

module.exports={concatinate,concatinater};