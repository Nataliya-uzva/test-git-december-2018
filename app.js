const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);
const enterNumber = () => {
  let currentNumber = true,
    resultArr = [],
    message = 'enter the number or click cancel',
    varning = 'THIS IS NOT A NUMBER';
  while (currentNumber) {
    currentNumber = prompt(message);
    if (currentNumber === null) continue;
    else if (!isNumeric(currentNumber)) alert(varning);
    else resultArr.push(+currentNumber);
  }
  console.log(resultArr.sort((a, b) => a - b).join());
};

console.log(enterNumber());
