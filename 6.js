/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число в качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

// isEven(3); // false
// isEven(4); // true

// exports.isEven = isEven;

const isEven = function () {

    for (let i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] !== 'number') {
            throw new Error('Is not a number type!');
        }
        if (arguments[i] % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isEven(3));
console.log(isEven(4));