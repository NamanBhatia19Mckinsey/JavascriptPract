function sameDigit(input){
    if(input<9)
        return true;
    let val=input%10;
    input=Math.floor(input/10);
    while(input>0){
        let rem=input%10;
        input=Math.floor(input/10);
        switch(rem!==val){
            case true:
                return false;
        }
    }
    return true;
}
const sameDigits=(input)=>{
    if(input<9)
        return true;
    let val=input%10;
    input=Math.floor(input/10);
    while(input>0){
        let reminder=input%10;
        input=Math.floor(input/10);
        if(reminder!=val)return false;
    }
    return true;
}

console.log(sameDigit(101));
console.log(sameDigits(101));


module.exports= {sameDigit,sameDigits};