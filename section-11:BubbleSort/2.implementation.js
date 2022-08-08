/**
 What is Burble Sort?
  A sorting algorithm where the larget values bubble up to the top!
 */
//Burble sort swapping exampes
//ES5
// function swap(arr, idx1, idx2) {
//   let temp = [idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// //ES2015
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

/**
 BubbleSort Psedocode
  1.Start looping from with a variable called I the end of the array towards as the beginning.
  2.Start an inner loop with a variable called j from the beginning unitl i -1
  3. if arr[j] is greater than arr[j+1] swap those two values!
 */

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  //1.Start looping from with a variable called I the end of the array towards as the beginning.
  for (var i = arr.length; i > 0; i--) {
    console.log({ i });
    //2.Start an inner loop with a variable called j from the beginning unitl i -1
    for (var j = 0; j < i - 1; j++) {
      console.log({ j });
      // console.log(arr, arr[j], arr[j + 1]);
      //3. if arr[j] is greater than arr[j+1] swap those two values!
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8]));

//ES2015 version

// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = arr.length; i > 0; i--) {
//     console.log({ i });
//     for (let j = 0; j < i - 1; j++) {
//       console.log({ j });
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([37, 45, 29, 8]));
