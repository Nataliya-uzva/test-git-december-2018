//<====================class work task============================>
const str = 'aabbbaccaa';

const getIncomingValues = (str, result = '') => {
  const obj = [...str].reduce((pre, cur) => {
    pre[cur] = ++pre[cur] || 1;
    return pre;
  }, {});

  for (let key in obj) {
    result += obj[key] + key;
  }
  return result;
};
console.log('getIncomingValues :', getIncomingValues(str));

//<================================================>
// 1. Напишите функцию transfor(str), которая при вы  'aabbbaccaa' => '2a3b1a2c2a'

const transfor = (str, result = '') => {
  let hulfResult = [...str].reduce((pre, cur) => {
    if (pre.includes(cur) || !pre.length) {
      pre.push(cur);
    }
    if (!pre.includes(cur)) {
      result += `${pre.length}${pre[0]}`;
      pre = [...cur];
    }
    return pre;
  }, []);
  result += `${hulfResult.length}${hulfResult[0]}`;
  return result;
};

console.log('transfor :', transfor('aabbbaccaa')); ///  '2a3b1a2c2a'
console.log('transfor :', transfor('aaaaa')); ///  '5a'
console.log('transfor :', transfor('abcd')); ///  '1a1b1c1d'

//<================================================>

const transfor2 = (str, hulfResult = [], result = '') => {
  for (var i = 0; i < str.length; i++) {
    if (hulfResult.includes(str[i]) || hulfResult.length === 0) {
      hulfResult.push(str[i]);
    }
    if (!hulfResult.includes(str[i])) {
      result += `${hulfResult.length}${hulfResult[0]}`;
      hulfResult = [...str[i]];
    }
  }
  result += `${hulfResult.length}${hulfResult[0]}`;
  return result;
};

console.log('transfor2:', transfor2('aabbbaccaa')); ///  '2a3b1a2c2a'
console.log('transfor2:', transfor2('aaaaa')); ///  '5a'
console.log('transfor2:', transfor2('abcd')); ///  '1a1b1c1d'

//<================================================>
// 2. Напишите функцию, которая сравнивает объекты по значениям:

const compare = (obj1, obj2) => {
  obj1Arr = Object.values(obj1);
  obj2Arr = Object.values(obj2);
  if (obj1Arr.length !== obj1Arr.length) {
    return false;
  }
  return obj2Arr.every(n => obj1Arr.includes(n));
};

console.log("compare :", compare({ age: 30,  name: 'Vasya' }, { name: 'Vasya', age: 30 })); // true
console.log("compare :", compare({ name: 'Vasya' }, { name: 'Vasya', age: 30 })); // false

//<================================================>

const compare2 = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

console.log("compare2 :",compare2({ name: 'Vasya', age: 30 }, { name: 'Vasya', age: 30 })); // true
console.log("compare2 :",compare2({ name: 'Vasya' }, { name: 'Vasya', age: 30 })); // false
