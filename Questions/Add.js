const Add = (stringNumbers) => {
  let sum = 0;

  const hasDelimiter = stringNumbers.slice(0, 2) === '//' ? true : false;
  const delimiter = hasDelimiter
    ? stringNumbers.slice(2, stringNumbers.indexOf('\n') + 1).trim()
    : ',';
  const newStringNumbers = stringNumbers.slice(stringNumbers.indexOf('\n') + 1);
  let numbers = hasDelimiter
    ? newStringNumbers.split(delimiter)
    : stringNumbers.split(delimiter);

  if (delimiter.length > 1 && delimiter[0] !== delimiter[1]) {
    numbers = newStringNumbers.replace(/\D/g, '').split('');
  }

  if (!stringNumbers) {
    console.log(0);
    return 0;
  }

  numbers.map((number) => {
    if (number < 0) throw new Error(`Negatives not allowed: ${number}`);
    if (number > 1000) return;
    sum += parseInt(number);
  });

  console.log(sum);
  return sum;
};

module.exports = Add;
