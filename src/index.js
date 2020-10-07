module.exports = function toReadable (number) {
  let result = ''
  let zero = 'zero'
  let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteeb', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
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
  let tensPart = 0;
  if (number == 0) {
      ident = 'zero'
  } else if (number < 10) {
      ident = 'ones'
  } else if (number >= 10 && number <= 99) {
      ident = 'dozens'
      tensPart = arr
  } else if (number >= 100 && number <= 999) {
      ident = 'hundreds'
      tensPart = arr.slice(1)
  } else if (number >= 1000 && number <= 9999) {
      ident = 'thousands'
      tensPart = arr.slice(2)
  }

  let isTens = false;
  if (tensPart[0] == 1 && tensPart[1] != 0) {
    isTens = true;
  }

  switch (ident) {
    case 'zero':
      result = `${zero}`
    case 'ones': 
      result = `${ones[number-1]}`
    case 'dozens':
      result = `${tens[arr[0]-1]} ${ones[arr[1]-1]}`
    case 'hundreds': 
      result = `${hundreds[arr[0]-1]} ${tens[arr[1]-1]} ${ones[arr[2]-1]}`
    case 'thousands':
      result = `${thousands[arr[0]-1]} ${hundreds[arr[1]-1]} ${tens[arr[2]-1]} ${ones[arr[3]-1]}`
  }
  return result
}
