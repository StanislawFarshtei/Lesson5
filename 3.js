/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

// console.log(f(9, 3, 2)); // 3

// exports.f = f;

const f = function (param1, param2, param3) {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('Is not a number type');
        }
    }
    const param1MinParam2DivBy3rdParam = (arguments[0] - arguments[1]) / arguments[2];
    return param1MinParam2DivBy3rdParam
}

console.log(f(9, 3, 2));