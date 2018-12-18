//<=======================create template=========================>

const getTemplateArr = (size, arr = [], counter = 0) => {
  for (var i = 0; i < size; i++) {
    arr[i] = [];
    for (var j = 0; j < size; j++, counter++) {
      arr[i][j] = counter;
    }
  }
  return arr;
};

console.table(getTemplateArr(10));

//<=======================create Bomba=========================>

const checkBomba = arr =>
  arr.map(n => {
    let res = (n % 3 ? '' : 'Super') + (n % 5 ? '' : 'Buper') || n;
    return res === 'SuperBuper' ? (res = 'BOOM') : res;
  });

const getBombaArr = size => getTemplateArr(size).map(n => checkBomba(n));
console.table(getBombaArr(10));

//<=====================square left===========================>

const getPerimetrSquareLeft = (size, topRight = []) =>
  getTemplateArr(size).reduce((pre, cur, i, arr) => {
    if (i === 0) {
      topRight = cur.slice(1, -1).reverse();
    }
    if (i === arr.length - 1) {
      return pre.concat(cur, topRight);
    }
    pre.push(cur[0]);
    topRight.unshift(cur.pop());
    return pre;
  }, []);

console.log('Square :', getPerimetrSquareLeft(10));

//<=======================square left 2=========================>

const getPerimetrSquare2 = size => {
  const arr = getTemplateArr(size);
  let topRight = [];
  let result = [];
  arr.forEach((cur, i) => {
    if (i === 0) {
      topRight = cur.slice(1, -1).reverse();
    }
    result.push(cur[0]);
    topRight.unshift(cur.pop());
    if (i === arr.length - 1) {
      result = result.concat(cur.slice(1), topRight);
    }
  });
  return result;
};
console.log('Square2 :', getPerimetrSquare2(10));

//<=====================triangle right ===========================>

const getPerimetrTriangle = (size, diagonal = []) =>
  getTemplateArr(size).reduce((pre, cur, i, arr) => {
    if (i === 0) {
      return pre.concat(cur);
    }
    if (i === arr.length - 1) {
      return pre.concat(cur.pop(), diagonal);
    }
    pre.push(cur.pop());
    diagonal.unshift(cur[i]);
    return pre;
  }, []);

console.log('Triangle :', getPerimetrTriangle(10));

//<=======================triangle bottom=========================>

const getPerimetrTriangleBottom = (size, diagonal = []) =>
  getTemplateArr(size).reduceRight((pre, cur, i, arr) => {
    if (i === 0) {
      pre.push(cur[0]);
      return pre.concat(
        diagonal,
        arr
          .pop()
          .slice(1, -1)
          .reverse()
      );
    }
    pre.push(cur[0]);
    diagonal.unshift(cur[i]);
    return pre;
  }, []);

console.log('TriangleBottom :', getPerimetrTriangleBottom(10));

//<=======================helix=========================>

const helix = (input, resultArr, leftSideArr = []) => {
  if (!input.length) {
    //end of recursion
    return resultArr;
  }
  //add top side
  resultArr = resultArr.concat(input.shift());
  //add right side
  input.forEach(last => resultArr.push(last.pop()));
  //create left side
  input.forEach(first => leftSideArr.unshift(first.shift()));
  //add bottom side & left side
  resultArr = input.length
    ? resultArr.concat(input.pop().reverse(), leftSideArr)
    : resultArr;
  //all over again
  return helix(input, resultArr);
};
console.log('helix :', helix(getTemplateArr(10), []));
