module.exports = function toReadable (number) {
  let result = ''
  let zero = 'zero'
  let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
  let thousands = ['one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand', 'six thousand', 'seven thousand', 'eight thousand', 'nine thousand']

  let arr = []
  let num = number
  while (num > 0) {
      arr.push(num % 10)
      num = parseInt(num / 10) 
  }
  arr.reverse()
  
  let ident = '';
  if (number < 10) {
      ident = 'ones'
  } else if (number >= 10 && number <= 99) {
      ident = 'tens'
  } else if (number >= 100 && number <= 999) {
      ident = 'hundreds'
  } else if (number >= 1000 && number <= 9999) {
      ident = 'thousands'
  }

  if (number == 0) {
    result = `${zero}`
    //result.concat(zero) 
  } else if (ident === 'ones') {
    //result.concat(ones[number-1])
    result = `${ones[number-1]}`
  } else if (ident === 'tens') {
    //result.concat(tens[arr[0]-1], ones[arr[1]-1])
    result = `${tens[arr[0]-1]} ${ones[arr[1]-1]}`
  } else if (ident === 'hundreds') {
    //result.concat(hundreds[arr[0]-1], tens[arr[1]-1], ones[arr[0]-1])
    result = `${hundreds[arr[0]-1]} ${tens[arr[1]-1]} ${ones[arr[0]-1]}`
  } else if (ident === 'thousands') {
    //result.concat(thousands[arr[0]-1], hundreds[arr[1]-1], tens[arr[2]-1], ones[arr[3]-1])
    result = `${thousands[arr[0]-1]} ${hundreds[arr[1]-1]} ${tens[arr[2]-1]} ${ones[arr[3]-1]}`
  }

  return result
}
