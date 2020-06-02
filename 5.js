/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число в качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

// isPositive(-3); // false
// isPositive(3); // true

// exports.isPositive = isPositive;

const isPositive = function () {

    for (let i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] !== 'number') {
            throw new Error('Is not a number type!');
        }
        if (arguments.length > 1 ) {
            throw new Error('Invalid number of arguments');
        }
        return arguments[i] > 0;
    }
}

console.log(isPositive(-3));
console.log(isPositive(3));