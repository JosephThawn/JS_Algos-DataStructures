//In arrary, insertion and revmoing depend on where the particular array is
//ading or removing to an array of beginning or at the end is best to avoid becasue it run O(N), but accesing is faset which is constant time O(1)

// Big O of Array Operations
//  push-O(1) adding
//  pop-O(1) removing
//  shift-O(N)
//  unshiftO(N)
//  concat-O(N) merging
//  slice-O(N) coping a new arrary from the selected index
//  splice-O(N) removing existing elements of adding new elements of an original arrary
//  sort-O(N*logN)
//  forEach/map/filter/reduce/etc.-O(N)

//1. objects are fast, but they do not have order like Arrary
// 2. Arrarys ae great when you need an ondragover, but still be mindful that it is better if you can, better avoid to add and remove from the end and avoid adding and removing from the begiing of an array.Because this will cause cascade effect. Sames goes adding and removing from the midlle of an arrary.
