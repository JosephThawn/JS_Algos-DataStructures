function maxPresentations(scheduleStart, scheduleEnd) {
  // Write your code here
  let count = 1;
  let endTracker = 0;
  for (let i = 0; i < scheduleStart.length - 1; i++) {
    if (scheduleEnd[endTracker] <= scheduleStart[i + 1]) {
      count++;
      endTracker = i;
    }
  }
  console.log(count);
  return count;
}

maxPresentations([3, 3, 7, 2, 3, 5], [7, 6, 15, 4, 7, 8]);
maxPresentations([1, 1, 2, 3], [2, 3, 3, 4]);
