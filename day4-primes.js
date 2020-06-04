//Create Array from 1 to num, get all the prime numbers from the array and then get their sum:

const num = 30
let arr = []
let result

function sumAllPrimes(num) {
    for (let i = 2; i <= num; i++) {
        arr.push(i)
    }
    arr = arr.filter((arrVal) => {
        for (let j = 2; j <= Math.sqrt(arrVal); j++) {
            if (arrVal % j === 0) return false      
        }
        return true   
    })
    result = arr.reduce((x, y) => x + y)
    return console.log(result)
}

sumAllPrimes(num)
