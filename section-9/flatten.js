/**Flatten
 Write a recursive function called flatten which accepts an array of ayyays and returns a new array with all values flattened. 
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
 */

function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

class NestedIterator {
  constructor(nestedList) {
    this.data = [];
    this.flatten(nestedList);
  }

  flatten(list) {
    for (let el of list)
      if (el.isInteger()) this.data.push(el.getInteger());
      else this.flatten(el.getList());
  }

  hasNext() {
    return this.data.length;
  }

  next() {
    return this.data.shift();
  }
}
let result = new NestedIterator(list);
console.log(result([[1, 1], 2, [1, 1]]));
