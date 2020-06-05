//// SCRIMBA - DAY 5 - JS Challenge: Even Digits Only:
//// Function at (4) is the only part of the Challenge:

// 1) Original Array:
const numsArray = [246801, 12345, 222, 900026]
let boolArray = []

// 2) Iterate through an array of numbers (numsArray), return if number is even (true) or odd (false) and create new array (boolArray):
const numIsEven = array => { 
    array.forEach(x => boolArray.push(x % 2 === 0 ? true : false)) 
    return boolArray
}

// 3) Record how many even and odd numbers are in the array:
const howManyBools = array => {
    let evenCount = 0, oddCount = 0, finalResult
    array.map(y => y == true ? evenCount++ : oddCount++ )
    finalResult = `Even: ${evenCount} Odd: ${oddCount}`
    return finalResult
}

// 4) Return true for numbers with only even digits, false for numbers with 1 or more odd digits:
// THIS FUNCTION IS THE ONLY PART OF HE SCRIMBA - DAY 5 - JS Challenge: Even Digits Only:
const evenDigitsOnly = array => {
    let evensResult = []
    for (let i = 0; i < array.length; i++) {
        evensResult.push(`${array[i]}`.toString().split('').every((z) => (z % 2 === 0)))
    }
    return evensResult
}

/////////////////////////////////////////////////////////////////////////////////////////////
//LOG: [Original numsArray], [For Each Number in numsArray: Even (true), Odd (false)],
//     [How many even/How many odd in the numsArray], [For each number, are all digits even?]
// console.log(
    numsArray, boolArray, howManyBools(numIsEven(numsArray)), evenDigitsOnly(numsArray)
// )