//      7kyu
const accum = s => s.split('').map((c,i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
console.log(accum('abcd'))

//      6kyu
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2) + 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
console.log(towerBuilder(5))

//      7kyu
const solution1 = (str, ending) => str.endsWith(ending);
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
  return count == null ? 0 : count.length;
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

