const num = 29
//adds the sum of each digit in num:
const addTwoDigits = num => num.toString().split('').reduce((acc, cur) => acc + parseInt(cur),0)

console.log(addTwoDigits(num)) // 2 + 9 = 11




     
   

    
