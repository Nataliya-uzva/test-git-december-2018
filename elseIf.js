let a = +prompt('enter the number'),
  b = +prompt('enter the number'),
  c = +prompt('enter the number'),
  result = 'RESULT : ',
  message;

if (a >= b && a >= c) {

	result += b >= c 
	? `${a},${b},${c}` 
	: `${a},${c},${b}`;

} else if (b >= a && b >= c) {

	result += a >= c 
	? `${b},${a},${c}` 
	: `${b},${c},${a}`;

} else {

	result = a >= b 
	? `${c},${a},${b}` 
	: `${c},${b},${a}`;

}
message =
	a === b || a === c || b === c 
	? `there is matches | ` 
	: `no matches | `;

console.log(message + result);