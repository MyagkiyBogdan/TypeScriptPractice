// Задайте правильные ts типы, для классических js;

let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = a => {
  return 100 + a;
};

// Задавайте тип для переменной в которую можно сохранить любое значение.

let anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some: unknown;
some = 'Text';

let str: string;

str = some;

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

let person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

// Сделайте переменную, которая может принимать или строку или число.

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

// Укажите типы для следующих функций

function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}

// Создайте свой тип данных на основе имеющихся данных.

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
