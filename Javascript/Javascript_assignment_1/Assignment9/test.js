var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c"];

var i = 0;
var arr3 = [];

while (i < arr1.length && i < arr2.length) {
  arr3.push(arr1[i], arr2[i]);
  i += 1;
}

document.write(`<h3>Array 1 = ${arr1}`);
document.write(`<h3>Array 2 = ${arr2}`);
document.write(`<h3>${arr3}</h3>`);