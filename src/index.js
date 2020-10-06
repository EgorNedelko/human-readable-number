module.exports = function toReadable (number) {
  let result = ''
  let zero = 'zero'
  let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let tens = ['ten ', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety ']
  let hundreds = ['one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred ']
  let thousands = ['one thousand ', 'two thousand ', 'three thousand ', 'four thousand ', 'five thousand ', 'six thousand ', 'seven thousand ', 'eight thousand ', 'nine thousand ']

  let arr = []
  let num = number
  while (num > 0) {
      arr.push(num % 10)
      num = parseInt(num / 10) 
  }
  arr.reverse()
  
  return result
}
