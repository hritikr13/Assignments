const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i;
}
document.write('The sum of natural numbers:', sum);
