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

