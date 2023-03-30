// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffle", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
  })

  })

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// ***** keep getting the following error on running test*******

// week-4-assessment-Melaza6 git:(week4-leo) ✗ yarn test
// yarn run v1.22.19
// warning package.json: No license field
// error Command "test" not found.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// *************************************************************

// b) Create the function that makes the test pass.

// create a function that is going to take an array as parameter, have the parameter be .shift into a toBeShuffled array to store the first index. Then, I want to run a fof loop for the index "i" of the array, create another const to represent the shuffling of the index "i" with Matn.floo(Math.random() and multiply it by the some of the index "i" plus 1. Then have it return the array ofter the iteration. 


const shuffle = (array)=>{
  let toBeShuffled = array.shift()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
}return array
}
// console.log(shuffle(colors1));
// ---> [ 'yellow', 'green', 'blue', 'pink' ]
// console.log(shuffle(colors2));
// ---> [ 'aquamarine', 'saffron', 'periwinkle', 'ochre', 'indigo' ]



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("endTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)

  })
})

// ***** keep getting the following error on running test*******

// week-4-assessment-Melaza6 git:(week4-leo) ✗ yarn test
// yarn run v1.22.19
// warning package.json: No license field
// error Command "test" not found.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// *************************************************************

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// const endTally = (array)=>{
//   return Object.values(array).reduce((a,b)=> a - b)
// }

// console.log(endTally(votes1));
// ---> 11
// console.log(endTally(votes2));
// ---> -31

// b) Create the function that makes the test pass.

// create a function that takes an array of objects as a parameter. using Object.values on the array to get the values of the objects in an array and then used the built-in method .reduce on it. this method will add the values, to have it subtract the values will give .redues the parameter of (a,b) to symbolize the values in the array and then have it return its subtraction as 'a - b'. 

const endTally = (array)=>{
  return Object.values(array).reduce((a,b)=> a - b)
}

// console.log(endTally(votes1));
// ---> 11
// console.log(endTally(votes2));
// ---> -31

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("mergeArrays", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values. ", () => {
    expect(mergeArrays(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])

  })
})

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// ***** keep getting the following error on running test*******

// week-4-assessment-Melaza6 git:(week4-leo) ✗ yarn test
// yarn run v1.22.19
// warning package.json: No license field
// error Command "test" not found.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// *************************************************************

// b) Create the function that makes the test pass.

// create a function that takes the two arrays, then concatenate the first array and the second, within the .concat method, run .filter on the second array's values and if the index of any values from array 2 is less than zero in the first array.


const mergeArrays = (array1, array2) =>{
 return array1.concat(array2.filter((value) => array1.indexOf(value) < 0))
} 

// console.log(mergeArrays(dataArray1, dataArray2));
// ---> ['array', 'object', 'number', 'string', 'Boolean', 'null', 'undefined']