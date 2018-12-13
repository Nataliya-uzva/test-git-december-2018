const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

let answerDiv = document.createElement('div');
answerDiv.className = 'answerContainer';

const enterNumber = () => {
  let currentNumber = true,
    resultArr = [],
    message = 'enter the number or click cancel',
    varning = 'THIS IS NOT A NUMBER';

  while (currentNumber) {
    currentNumber = prompt(message);
    if (currentNumber === null) {
      break;
    } else if (!isNumeric(currentNumber)) {
      alert(varning);
    } else {
      resultArr.push(+currentNumber);
    }
  }
  return resultArr;
};

const showResult = () => {
  let matchMessage = '';
  const answer = enterNumber();

  matchMessage =
    answer.length === [...new Set(answer)].length
      ? 'no matches'
      : 'there is matches';

  answerDiv.innerHTML = `${matchMessage}  ${answer
    .sort((a, b) => a - b)
    .join()}`;

  answer.length ? document.body.append(answerDiv) : answerDiv.remove();
};

const button = document.querySelector('.task-button');
button.addEventListener('click', showResult);
