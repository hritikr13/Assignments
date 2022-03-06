var arr = [1, 1];
count = 2;

while (count != 100) {
  var a = arr[arr.length - 1];
  var b = arr[arr.length - 2];

  arr.push(a + b);
  count++;
}

arr.forEach(function (element) {
  document.write(` <b>${element}, `);
});