let numbers = [1, 4, 1, 2, 7, 5, 2, 1, 3, 5, 7, 8, 6, 5, 3, 1, 2, 4, 5, 6];
let count = [];
let i, z = 0;
let max = Math.max(...numbers);      
// initialize counter
document.write("Numbers entered" + " = " + numbers + '<br>');
for (i = 0; i <= max; i++) {
    count[i] = 0;
}
for (i=0; i < numbers.length; i++) {
    count[numbers[i]]++;
}
for (i = 0; i <= max; i++) {
    while (count[i]-- > 0) {
        numbers[z++] = i;
    }
}
document.write("After Bubblesort =  ");
// output sorted array
for (i=0; i < numbers.length; i++) {
    document.write(numbers[i]);
}