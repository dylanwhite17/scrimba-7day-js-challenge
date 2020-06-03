const arrayWithDup = [8, 2, 3, 1, 2, 5, 3]
const arrayNoDup =   [8, 1, 2, 5, 3, 4]

function firstDuplicate(nums) {
    let newNums = []
    for (let i=0; i< nums.length; i++) {
        if (newNums.includes(nums[i])){
            //returns first duplicate number in nums
            return nums[i]
        } else if (!newNums.includes(nums[i])) {
            newNums.push(nums[i])
        }  
    }
    //returns -1 if no duplicates numbers in nums
    return -1
}

console.log(`${firstDuplicate(arrayWithDup)}, ${firstDuplicate(arrayNoDup)}`) //2, -1


