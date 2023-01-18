// normal funct
function findLargestEven(inputArray){
  let largestEven=-1;
  inputArray.forEach(number=> {
    if(    !(number & 1) && number>largestEven){
      largestEven=number;
    }
  });
  return largestEven;
}

// Arrow funct
const findLargestEvens= (inputArray)=>{
  let largestEven=-1;
  inputArray.forEach(number=> {
    if(!(number&1) && number>largestEven){
      largestEven=number;
    }
  });
  return largestEven;
};

console.log(findLargestEven([1,2,3,4,5]));
console.log(findLargestEvens([1,2,3,4,5]));


module.exports= {findLargestEven,findLargestEvens};