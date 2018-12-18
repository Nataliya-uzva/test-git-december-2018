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

const checkBomba = arr => {
  return arr.map(n => {
    let res = (n % 3 ? '' : 'Super') + (n % 5 ? '' : 'Buper') || n;
    return res === 'SuperBuper' ? (res = 'BOOM') : res;
  });
};

const getBombaArr = size => {
  return getTemplateArr(size).map(n => checkBomba(n));
};
console.table(getBombaArr(10));

//<=====================square left===========================>

const getPerimetrSquareLeft = (size, rightSide = []) => {
  return getTemplateArr(size).reduce((pre, cur, i, arr) => {
    if (i === 0) {
      return pre.concat(cur.reverse());
    }
    if (i === arr.length - 1) {
      return pre.concat(cur, rightSide);
    }
    pre.push(cur[0]);
    rightSide.unshift(cur.pop());
    return pre;
  }, []);
};

console.log('Square :', getPerimetrSquareLeft(10));

//<=======================square left 2=========================>

const getPerimetrSquare2 = size => {
  let arr = getTemplateArr(size),
    resultArr = arr[0].reverse(),
    rightSide = [],
    middle = arr.slice(1, -1);
  middle.forEach(n => {
    resultArr.push(n[0]);
    rightSide.unshift(n.pop());
  });

  return (resultArr = resultArr.concat(arr.pop(), rightSide));
};
console.log('Square2 :', getPerimetrSquare2(10));

//<=====================triangle right ===========================>

const getPerimetrTriangle = (size, diagonal = []) => {
  return getTemplateArr(size).reduce((pre, cur, i, arr) => {
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
};

console.log('Triangle :', getPerimetrTriangle(10));

//<=======================triangle bottom=========================>

const getPerimetrTriangleBottom = (size, diagonal = []) => {
  return getTemplateArr(size).reduceRight((pre, cur, i, arr) => {
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
};

console.log('TriangleBottom :', getPerimetrTriangleBottom(10));

//<=======================helix=========================>

const helix = (input, result, leftSideArr = []) => {
  if (!input.length) {
    //end recursion
    return result;
  }
  //add top side
  result = result.concat(input.shift());
  //add right side
  input.forEach(last => result.push(last.pop()));
  //create left side
  input.forEach(first => leftSideArr.unshift(first.shift()));
  //add bottom side & left side
  result = input.length
    ? result.concat(input.pop().reverse(), leftSideArr)
    : result;
  //all over again
  return helix(input, result);
};
console.log('helix :', helix(getTemplateArr(10), []));
