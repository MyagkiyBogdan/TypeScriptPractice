"use strict";
let age = 50;
let newName = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
let person = ['Max', 21];
var isLoading;
(function (isLoading) {
    isLoading[isLoading["LOADING"] = 0] = "LOADING";
    isLoading[isLoading["READY"] = 1] = "READY";
})(isLoading || (isLoading = {}));
let union;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    },
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=app.js.map