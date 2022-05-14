function twoSum(array, index) {
  let count1 = 0;
  let count2 = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[count1] + array[count2] === index) {
      return [array[count1], array[count2]];
    }
    count1++;
    count2++;
  }
  return false;
}

console.log(twoSum([1, 3, 5, 6, 7, 19], 8));

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they
 * add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element
 * twice.
 * You can return the answer in any order.
 */
