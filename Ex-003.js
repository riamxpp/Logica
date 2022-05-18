function twoSum(array, index) {
  let repetetion = 0;
  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
      if (repetetion !== i && array[repetetion] + array[i] === index) {
        return [repetetion, i];
      }
    }
    repetetion++;
  }
}

console.log(twoSum([3, 2, 3], 6));

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they
 * add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element
 * twice.
 * You can return the answer in any order.
 */
