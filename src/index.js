module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const arrNumbers = number.toString().split('');
  const numbers = arrNumbers.map((num) => Number(num));
  const teens = Number(`${numbers[1]}${numbers[2]}`);

  if (arrNumbers.length === 3 && numbers[1] === 0 && numbers[2] === 0) {
    return `${ones[numbers[0]]} hundred`;
  }

  if (arrNumbers.length === 3 && numbers[1] === 1 && numbers[2] !== 0) {
    return `${ones[numbers[0]]} hundred ${ones[teens]}`;
  }

  if (arrNumbers.length === 3 && numbers[1] === 1 && numbers[2] === 0) {
    return `${ones[numbers[0]]} hundred ${ones[10]}`;
  }

  if (arrNumbers.length === 3 && numbers[2] === 0) {
    return `${ones[numbers[0]]} hundred ${tens[numbers[1]]}`;
  }

  if (arrNumbers.length === 3 && numbers[1] === 0) {
    return `${ones[numbers[0]]} hundred ${ones[numbers[2]]}`;
  }

  if (arrNumbers.length === 3) {
    return `${ones[numbers[0]]} hundred ${tens[numbers[1]]} ${
      ones[numbers[2]]
    }`;
  }

  if (arrNumbers.length === 2 && number < 20) {
    return `${ones[number]}`;
  }

  if (arrNumbers.length === 2 && number >= 20 && numbers[1] !== 0) {
    return `${tens[numbers[0]]} ${ones[numbers[1]]}`;
  }

  if (number !== 10 && numbers[1] === 0) {
    return `${tens[numbers[0]]}`;
  }

  if (number <= 19) {
    return `${ones[number]}`;
  }

  return `noting`;
};
