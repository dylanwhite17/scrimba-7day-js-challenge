const string = 'pARiS'
const string2 = 'John'

const properNounCorrection = (str) => {
    const firstLetter = str.slice(0,1).toUpperCase()
    const theRest = str.slice((1),(str.length)).toLowerCase()
    const properNoun = firstLetter.concat('', theRest)
    return properNoun
}
    
//console.log (
    properNounCorrection(string),
    properNounCorrection(string2)
//)
