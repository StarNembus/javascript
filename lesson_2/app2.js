/* Задание 1*/
'use strict'
/*let a = 1, b = 1, c, d;
c = ++a;
alert(c); /*++ увеличивает значение а на единицу, в префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением

d = b++; /*++ увеличивает значение b на единицу, в постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование

c = 2 + ++a; /* ранее а стало 2, в данном примере а стало больше еще на единицу, так как перед ним стоит ++, результат сложения 2 + 3 = 5

d = 2 + b++;/* сначала возвратился результат b из строчки 7, b стало 2

console.log(a); /* как упоминалось выше а стало равным 3
console.log(b); /* в строчке 11 b увеличилось на 1, b = 3*/

/* Задание 2*/
/*let a = 2;
let x = 1 + (a *= 2); /* выражение(a *= 2) есть  a = a * 2, затем 1 прибавляется к полученному значению
console.log(x); /* 5 
console.log(a); /* 4 */

/* Задание 3 */
'use strict'
var a = -50
var b = 35
if (a >= 0 && b >= 0){
    alert(a + b);
}
else if (a < 0 && b < 0){
    alert(a * b);
}
else {
    alert(a + b);
}
/* Задание 4*/

function sum_func(a, b){
    return a + b;
}
function difference(a, b){
    return a - b;
}
function multip(a, b){
    return a * b;
}
function divizion(a, b){
    return a / b;
}
// alert(sum_func(5, 4));
// alert(difference(5, 4));
// alert(multip(5, 4));
// alert(divizion(5, 4));

/* Задание 5*/

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return sum_func(arg1, arg2);
        case '-':
            return difference(arg1, arg2);
        case '*':
            return multip(arg1, arg2);
        case '/':
            return divizion(arg1, arg2);
        default:
            return NaN;
    }
}
alert(mathOperation(5, 4, '+'));
alert(mathOperation(5, 4, '-'));
alert(mathOperation(5, 4, '*'));
alert(mathOperation(5, 4, '/'));
alert(mathOperation(5, 4, ''));