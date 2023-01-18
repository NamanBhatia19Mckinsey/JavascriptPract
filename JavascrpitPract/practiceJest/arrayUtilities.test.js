const {doubleArray,getEvenNumberArray,getEvenTripleNumber,getEvenTripleNumbers}=require('./arrayUtilities');

describe('Array utilites',()=>{
  describe('Double every number in the array',()=>{
    it('Should return error message when input is not an array',()=>{
      expect(()=>doubleArray('abc')).toThrow('Not an array');
    });
    it('Should return error message when any element of array is not integer',()=>{
      expect(()=>doubleArray([1,2,3,4,'a',5])).toThrow('All elements of array are not integers');
    });
    it('Should return error message when array is empty',()=>{
      expect(()=>doubleArray([])).toThrow('Empty error');
    });
    it('Should return array with doubled elements when input is integer array',()=>{
        expect(doubleArray([1,2,3])).toEqual([2,4,6]);
    });
    it('Should return array with doubled elements when input is integer array',()=>{
      expect(doubleArray([222])).toEqual([444]);
    });
  });

  describe('Extract the even numbers from array',()=>{
    it('Should return error message when input is not an array',()=>{
      expect(()=>getEvenNumberArray('abc')).toThrow('Not an array');
    });
    it('Should return error message when any element of array is not integer',()=>{
      expect(()=>getEvenNumberArray([1,2,3,4,'a',5])).toThrow('All elements of array are not integers');
    });
    it('Should return error message when array is empty',()=>{
      expect(()=>getEvenNumberArray([])).toThrow('Empty error');
    });
    it('Should return array of even numbers when input is integer array',()=>{
        expect(getEvenNumberArray([1,2,3,5,6])).toEqual([2,6]);
    });
    it('Should return an empty array when input is integer array of odd numbers',()=>{
      expect(getEvenNumberArray([1,3,5,7,9])).toEqual([]);
    });
  });

  describe('Triple numbers of array and filter out even numbers in the array',()=>{
    it('Should return error message when input is not an array',()=>{
      expect(()=>getEvenTripleNumber('abc')).toThrow('Not an array');
    });
    it('Should return error message when any element of array is not integer',()=>{
      expect(()=>getEvenTripleNumber([1,2,3,4,'a',5])).toThrow('All elements of array are not integers');
    });
    it('Should return error message when array is empty',()=>{
      expect(()=>getEvenTripleNumber([])).toThrow('Empty error');
    });
    it('Should return array of even numbers after tripling when input is integer array',()=>{
        expect(getEvenTripleNumber([1,2,3,5,6])).toEqual([6,18]);
    });
    it('Should return empty array  when input is integer array of odd numbers',()=>{
      expect(getEvenNumberArray([1,3,5,7,9])).toEqual([]);
    });
  });

  describe('Triple numbers of array and filter out even numbers in the array',()=>{
    it('Should return error message when input is not an array',()=>{
      expect(()=>getEvenTripleNumbers('abc')).toThrow('Not an array');
    });
    it('Should return error message when any element of array is not integer',()=>{
      expect(()=>getEvenTripleNumbers([1,2,3,4,'a',5])).toThrow('All elements of array are not integers');
    });
    it('Should return error message when array is empty',()=>{
      expect(()=>getEvenTripleNumbers([])).toThrow('Empty error');
    });
    it('Should return array of even numbers after tripling when input is integer array',()=>{
        expect(getEvenTripleNumbers([1,2,3,5,6])).toEqual([6,18]);
    });
    it('Should return an empty array when input is integer array of odd numbers',()=>{
      expect(getEvenTripleNumbers([1,3,5,7,9])).toEqual([]);
    });
  });
});