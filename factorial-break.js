let num = 10;
let factorial = num - 1;


while  (num) {
    num *= factorial;
    factorial--;

    if (factorial <= 1) break;
    
}

console.log(num);
