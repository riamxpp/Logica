function checkIntersection(array) {
  let nums1 = array[0].split(", ");
  let nums2 = array[1].split(", ");
  let intersectionNumbers = [];
  nums1.forEach((item) => {
    nums2.forEach((number) => {
      if (number === item) {
        intersectionNumbers.push(+number);
      }
    });
  });
  return intersectionNumbers.length > 0 ? intersectionNumbers : false;
}

console.log(checkIntersection(["1, 3, 7, 10, 13", "3, 4, 5, 7, 10"]));

/**
 * Vefique se na array de string existem intersecção entre números, caso exista retorne-os caso não
 * retorne false
 */
