function mergeTwoLists(list1, list2) {
  const listWithSameNumber = [];
  const newList1 = [];
  const newList2 = [];
  list1.forEach((item) => {
    for (let i = 0; i < list2.length; i++) {
      if (item === list2[i]) {
        listWithSameNumber.push(item);
      }
    }
  });
  list1.forEach((item, index) => {
    if (item !== listWithSameNumber[index]) newList1.push(item);
  });
  list2.forEach((item, index) => {
    if (item !== listWithSameNumber[index]) newList2.push(item);
  });
  const organizedArray = newList1.concat(newList2, listWithSameNumber);
  organizedArray.sort((a, b) => a - b);
  return organizedArray;
}

console.log(mergeTwoLists([1, 3, 3, 5], [1, 2, 3, 4]));

/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of
 * the first two lists.
 * Return the head of the merged linked list.
 */
