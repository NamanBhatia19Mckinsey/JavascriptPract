function getlongestString(input){
    let maxLength=0;
    let output="";
    input.forEach(itr=> {
        let length=itr.length;
        if(length>maxLength){
            maxLength=length;
            output=itr;
        }
    });
    return output;
}
const getlongestString=(input)=>{
    let maxLength=0;
    let output="";
    input.forEach(itr=> {
        let length=itr.length;
        if(length>maxLength){
            maxLength=length;
            output=itr;
        }
    });
    return output;
}
console.log(longestString(["we", "love", "code", "academy"]));
console.log(longString(["we", "love", "code", "academy"]));


module.exports= {getlongestString,getlongestString};
