let myArray = ['abc', 'ded']

const addBorder = (array) => {
    let symbols = '*'.repeat(array.length + 5)
    array.unshift(symbols)
    array.push(symbols)
    
    for (let i = 1; i < array.length - 1; i++) {
        array[i] = '* '.concat(array[i], ' *')
    }
    return array
}

console.log (
    addBorder(myArray)
)

//// Result adds border around letters:
// [ '*******',
//   '* abc *',
//   '* ded *',
//   '*******' ]


