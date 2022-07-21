//14.js Big O of objects

// Big O of Objects
// 1. insertion - O(1)
// 2. removal - O(1)
// 3. searching - O(N)
// 4. Access- O(1)

//Object.keys- O(N)
//Object.values- O(N)
//Object.entries- O(N)
//hasOwnProperty- O(1) this is constant time

let instructor = {
  firstName: "kelly",
  inInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
const key = Object.keys(instructor);
const entry = Object.entries(instructor);
const property = instructor.hasOwnProperty("firstName");

console.log(key);
console.log(entry);
console.log(property);
