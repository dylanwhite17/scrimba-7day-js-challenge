//// SCRIMBA - DAY 6 - JS Challenge: : make the array consecutive:
//// The challenge was to return the amount (count) of numbers missing
//// in the array between the lowest (2) and highest (50), to count from
//// the lowest to highest digits in the arry.
////
const nums = [6,2,8,4,12,50] //test case array + integers over 10

function makeArrayConsecutive(nums) {
    const newArray = nums.map(a => a).sort((b, c) => b - c)
    const x = newArray[0] //first index: value
    const y = newArray.slice(-1)[0] //last index: value
    console.log(newArray, x, y)
    let count = 0
    let result = 0

    for (let i = x; i < y; i++) {
        if (!newArray.includes(i)) {
            count++
        }
    }
    result = count
    return result // 43 : the amount of numbers missing between 2 and 50 in nums array
}

makeArrayConsecutive(nums)

