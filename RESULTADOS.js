const localNames = localStorage.getItem('localNames')
const arrayNames = localNames.split(',')
console.log(arrayNames)

const resultAll = localStorage.getItem('resultAll');
const arrayResult = resultAll.split(',')
console.log(arrayResult)

const resultForNames = {
    names: arrayNames,
    results: arrayResult
}

console.log(resultForNames)