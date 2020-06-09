//// FIND THE FIRST  DUPLICATE NUMBER IN AN ARRAY:
const arrayWithDup = [8,4,2,3,1,4,2,5,3]
const arrayNoDup =   [8,1,2,5,3,4]


const firstDuplicate = nums => {
    let newNums = []
    let result = []
    for (let i = 0; i < nums.length; i++) {
        newNums.includes(nums[i]) ? result.push(nums[i]) : newNums.push(nums[i]) 
    }
    //returns -1 if no duplicates numbers in nums
    return result[0] || -1
    }

console.log(`${firstDuplicate(arrayWithDup)}, ${firstDuplicate(arrayNoDup)}`) //2, -1

////OPTIONAL MESSING AROUND: FIX THE DUPLICATION AND PROVIDE FEEDBACK
const fixDuplicate = (value, array) => {
    value == -1 ? console.log(`The array you have provided contains no duplicates.`) 

                : console.log(`${value} is the duplicate number in this array.`)
                  let fixArrayToSet = new Set(array)
                  let fixedArray = [...fixArrayToSet]
                  return fixedArray
}
fixDuplicate(firstDuplicate(arrayWithDup), arrayWithDup)
fixDuplicate(firstDuplicate(arrayNoDup), arrayNoDup)
