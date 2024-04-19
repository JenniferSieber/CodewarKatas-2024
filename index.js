// 6kyu
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
}

console.log(toCamelCase('The-Stealth-Warrior'))

//7kyu
function divisors(integer) {
  let arr = []
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0 ) {
      arr.push(i)
    }
  }
  return arr.length == 0 ? `${integer} is prime` : arr
}

console.log(divisors(15))
console.log(divisors(25))
console.log(divisors(13))
console.log(divisors(12))

// 6kyu
function expandedForm(num) {
  const n = num.toString()
  const arr = n.split('').reverse()
  return arr.map((el, i) => el * Math.pow(10, i)).filter(el => el > 0).reverse().join(' + ')
}

console.log(expandedForm(12))
console.log(expandedForm(70304))

// 7kyu
const validName = arr => {
  if(arr.length < 1) return "You must test at least one name."
  else if (arr.length < 2) return "Congratulations, you can choose any name you like!"
 
  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i-1].toUpperCase().endsWith(arr[i].toUpperCase().charAt(0)))) {
      return "Back to the drawing board, your baby names are not compatible."
    }
    return "Congratulations, your baby names are compatible!" 
  }
}

console.log(validName(["Peaches","Theodora","Zpple", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Rebel", "Zourdes"]))
console.log(validName(["George", "Charlotte"]))
console.log(validName(["Peaches", "Saint", "Theodora", "Ava", "Apple", "Egypt", "Tallulah", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Ever", "Rebel", "Lourdes"]))
console.log(validName([]))
console.log(validName(["Jaden"]))
console.log(validName(["Cruz", "Zuma"]))

// 8kyu
const ArrowFunc = arr => arr.map(num => String.fromCharCode(num)).join('')
console.log(ArrowFunc([84,101,115,116]))
console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]))


// 7kyu 
const rowSumOddNumbers = n => Math.pow(n, 3)
console.log(rowSumOddNumbers(1))
console.log(rowSumOddNumbers(42))

// 8kyu 
const well = x => {
  let counts = x.filter(el => el == 'good').length
  return counts < 1 ? 'Fail!' :
    counts < 3 ? 'Publish!' : 'I smell a series!'
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

// 8kyu
const maps = x => x.map(n => n + n)
console.log(maps([1,2,3]))
console.log(maps([11,12,13]))

// 7kyu
const spacify = str => str.split('').join(' ')
console.log(spacify('hello world'))

// 8kyu  1 Imperial Gallon = 4.54609188 litres & 1 Mile = 1.609344 kilometres
function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  let kilometres = (mpg * 1.609344)/4.54609188
  return Number(kilometres.toFixed(2))
}
console.log(converter(10))

// 8kyu for loop ad ES6 operators
// function monkeyCount(n) {
//   const monkeys = []
//   for(let i = 1; i <= n; i++) {
//     monkeys.push(i)
//   }
//   return monkeys
// }
function monkeyCount(n) {
  return [...Array(n).keys()].map(a => a + 1)
  }
  console.log(monkeyCount(1))
  console.log(monkeyCount(10))

// 8kyu
function formatMoney(amt) {
  return `$${amt.toFixed(2)}`
}
console.log(formatMoney(3))
console.log(formatMoney(3.1))

// 6kyu
const inArray = (arr1, arr2) => arr1.filter(a1 => arr2.find(a2 => a2.match(a1))).sort();
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))

// 6kyu
function wave(str) {
  let result = []
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
   let copy = str.split('')
   if (copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    result.push(copy.join(''))
   } 
  }
  return result
}
console.log(wave('hello'))

// 6kyu
const encryptThisBruteForce = (text) => {
  let textArr = text.split(' ')
  let result = textArr.map(word => {
    let first = word.charCodeAt(0)
    let second = word.slice(1,2)
    let body = word.slice(2, -1)
    let last = word.slice(-1)
   return `${first}${last}${body}${second}`
  })
  return result.join(' ')
}

// with REGEX:
// `/(^\w)(\w)(\w*)(\w$)/`  
// group `1` matches first word
// group `2` matches the second word char
// group `3` matches zero or more chars after group 2
// group `4` matches last word char at end of the word
const encryptThis = text => text
  .split(' ')
  .map(word => word
    .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
    .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

  console.log(encryptThis('Hello')) // "72olle"
  console.log(encryptThis('good')) // "103doo"
  console.log(encryptThis('hello world')) // "104olle 119drlo"

// 6kyu
function palindromization(element, n){
  if (element == '' || n < 2) return 'Error!'
  return element
    .repeat(n).slice(0, Math.floor(n/2)) + element.repeat(n).slice(0, Math.ceil(n/2))
    .split('')
    .reverse()
    .join('');
}
console.log(palindromization('123', 2))
console.log(palindromization('123', 5))
console.log(palindromization('', 2))
console.log(palindromization('123', 1))

// 7kyu
function convertPalindromes(numbers) {
  return numbers.map(str => {
    str = str.toString()
    let rev = str.split('').reverse().join('')
    return str == rev ? 1 : 0
  });
};

console.log(convertPalindromes([101, 2, 85, 33, 14014]))
console.log(convertPalindromes([45, 21, 303, 56]))

//  6kyu
function wordMeshLong(arr) {
  // initialize empty string
  let result = ''
  // loop through each word of array, except the last one -comparing each word with next one.
  for (let i = 0; i < arr.length - 1; i++) {
    // concatenate the current word with next word with space,
    // use .match() with REGEX to test if theres repeating substring
    // `\1` to first captured group `(.+)` 
    // if truthy, will contain array where test[1] is the repeating substring, falsy = null
    let test = (arr[i] + ' ' + arr[i+1]).match(/(.+) \1/)
    // if falsy return failed to mesh
    if (!test) return 'failed to mesh'
    // if truthy concate to the result string
    result += test[1]
  }
  // return result
  return result
}
console.log(wordMeshLong(["allow", "lowering", "ringmaster", "terror"]))
console.log(wordMeshLong(["kingdom", "dominator", "notorious", "usual", "allegory"]))

// Shortened version:
function wordMesh(arr){
  const meshed = arr.join` `.match(/(\w+)(?= \1)/g);
  return meshed.length == arr.length - 1 ? meshed.join`` : 'failed to mesh'
}

console.log(wordMesh(["allow", "lowering", "ringmaster", "terror"]))
console.log(wordMesh(["kingdom", "dominator", "notorious", "usual", "allegory"]))

//      7kyu
const accum = s => s.split('').map((c,i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
console.log(accum('abcd'))

//      6kyu
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2) + 1)
             + " ".repeat(nFloors - i - 1))
  }
  return tower
}
console.log(towerBuilder(5))

//      7kyu
const solution1 = (str, ending) => str.endsWith(ending)
console.log(solution1('abc', 'bc'))
console.log(solution1('abc', 'z'))



//      6kyu
function solution(number) {
  if (number < 0) return 0
  const nums = []
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      nums.push(i)
    }
  }
  return nums.reduce((ttl, cv) => ttl + cv, 0)
}

console.log(solution(-100))
console.log(solution(100))

//      8kyu
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd"
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(33))

//       decimal to bit
function decimalToBinary(decimal) {
  let binary = '';
  while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
  }
  return binary || '0'; // return '0' if input is 0
}
//     Example usage
console.log(decimalToBinary(1234)); // Output: '10011010010'

//     6kyu
var countBits = (n) => {
  let binary = ''
  while (n > 0) {
      binary = (n % 2) + binary
      n = Math.floor(n / 2)
  }
  let str = binary || '0'
  return str.split('').reduce((a,b) => Number(a) + Number(b), 0)
}

console.log(countBits('1234'))

//     6kyu
function alphabetPosition(text) {
 let result = text.replace(/[^a-z]/gi, '').toLowerCase().split('').map(l => l = l.charCodeAt(0) - 96)
 return result.filter(a => a > 0 && a < 27).join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

//      7kyu strings
function getCount(str) {
  const count = str.match(/[aeiou]/gi)
  return count == null ? 0 : count.length
}
console.log(getCount('alphabet'))
console.log(getCount('vowels'))
console.log(getCount('o a kak ushakov lil vo kashu kakao'))
console.log(getCount('my pyx'))

function disemvowel(str) {
  const newStr = []
  str.split('').forEach(el => {
    if (el === " " || !el.match(/[aeiou]/gi)) {
      newStr.push(el)
    }
  })
  return newStr.join('')
}

console.log(disemvowel('This website is for losers LOL!'))

//      6kyu strings
function spinWords(str){
  return str.split(' ').map(word => {
    if (word.length > 4) {
     return word.split('').reverse().join('')
    } else { 
      return word
    }
  }).join(' ')
}

console.log(spinWords('Hey fellow warriors'))
console.log(spinWords('This is a test'))
console.log(spinWords('This is another test'))

//      6kyu strings
function createPhoneNumber(arr){
  const a = []
  const b = []
  const c = []
  arr.forEach((num, i) => {
    if (i < 3) {
      a.push(num)
    } else if (i > 2 && i < 6) {
      b.push(num)
    } else if (i > 5 && i < 10) {
      c.push(num)
    }
  })
  return `(${a.join('')}) ${b.join('')}-${c.join('')}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

//      7kyu strings
function highAndLow(numbers){
  const nums = numbers.split(' ').map(num => Number(num)).sort((a,b) => a - b)
  return `${nums[nums.length -1]} ${nums[0]}`
}
console.log(highAndLow('1 2 3 4 5'))
console.log(highAndLow('1 2 -3 4 5'))
console.log(highAndLow('1 9 3 4 -5'))

