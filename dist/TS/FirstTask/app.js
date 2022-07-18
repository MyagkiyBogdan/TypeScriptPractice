"use strict";
const button = document.querySelector('button');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
function add(number1, number2) {
    return number1 + number2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
//# sourceMappingURL=app.js.map