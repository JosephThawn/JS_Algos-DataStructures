/**StringifyNumbers
 Write function called stringifynumbers which takes in an object and finds all of the values which are numbers and convert them to strings. Recursion would be a great way to solve this. 
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
 */
function stringifyNumbers(obj) {
  //newobj = {}
  var newObj = {};
  for (var key in obj) {
    //dont get this part how typeof obj[key] === "number"?
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
      //hwere this "object" coming from
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(stringifyNumbers("hello"));
/**
 will be back for thorrugh explanation
 */
