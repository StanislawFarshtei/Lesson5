/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было передано не число.
 */

// Решение

// console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

// exports.f = f;

const f = function() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('Not a number type');
        }
        const parameter = arguments[i];
        sum += parameter;
    }
    return sum;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1));

