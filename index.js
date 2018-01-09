function add(a,b) {
  return a + b;
}

function subtract(a ,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a , b) {
  return a / b;
}

function inc(n) {
  return n += 1;
}

function dec(n) {
  return n -= 1;
}

function makeInt(n) {
  if (parseInt(n,10)) {
    return parseInt(n);
  } else if (parseInt(n, 10)) {
    return parseInt(n, 10);
  } else if (parseInt('n',10)) {
    return parseInt(n);
  }
}

function preserveDecimal(n) {
  if (parseFloat(n)) {
    return parseFloat(n);
  } else if (n === "n") {
    return parseFloat(n);
  }
}
