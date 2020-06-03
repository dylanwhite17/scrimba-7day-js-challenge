let num = 2345
//adds the sum of each digit in num:
function addTwoDigits(num) {
    const result = num.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0)
    return result // 2 + 9 = 11
}

console.log(addTwoDigits(num))




     
   

    
