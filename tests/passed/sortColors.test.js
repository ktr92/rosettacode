const sortColors = require('../../leetcode/sorting/sortColors');

test('[2,0,2,1,1,0]', () => {
  const numbers = [2,0,2,1,1,0];
  
  sortColors(numbers);
  console.log(numbers)
  expect(numbers).toEqual([0,0,1,1,2,2]);
});


test('[2,0,1]', () => {
  const numbers = [2,0,1];
  
  sortColors(numbers);
  console.log(numbers)
  expect(numbers).toEqual([0,1,2]);
});
