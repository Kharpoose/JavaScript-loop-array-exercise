let x = [12, 15, 99];
console.log(x[1]);
x[2] = 99;
console.log(x[2]);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([1, 20, 22, 28]));
console.log(getLastValue(x));
console.log(getLastValue(["Hello", "Stand", "try"]));

function swapArray(array) {
  const lastIndex = array.length - 1;

  const firstValue = array[0];
  const lastValue = array[lastIndex];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}
console.log(swapArray(x));
console.log(swapArray([12, 55, 95, 55, 35]));
