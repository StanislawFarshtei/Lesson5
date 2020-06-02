/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 *
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение

// getDivisors(12); // [1, 2, 3, 4, 6, 12]

// exports.getDivisors = getDivisors;

const getDivisors = function () {

    for(let i = 0; i < arguments.length; i++) {

        if (arguments[i] && typeof arguments[i] !== 'number') {
            throw new Error('Is not a number type');
        }
        if (arguments[i] < 1) {
            throw new Error(`The number can't be lesser than 1`);
        }

        const array = [];

        for (let divisor = 1; divisor <= arguments[i]; divisor++) {
            if (arguments[i] % divisor === 0){
                array.push(divisor);
            }
        }

        return array;
    }

}

console.log(getDivisors(12));