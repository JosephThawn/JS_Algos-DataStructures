// Optimized BubbleSort with noSwaps
// if our data is almost sorted if it is already sorted. it does not needed to be bubble sorted, our bubble sort algorithm does not going to treat it any differently and it still try to solve any sinle item. That case we need to use optimatimation check; that way we could save uncessary time.
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
/**
   What is time complexity in bubble sort?
    In general, ti i n^2 becasue we have a nested loop and we are roughly make a comparison, Howevery f the data is neraly or already sorted then with this new version with no swaps, it is more like linear time O(N)
   */
