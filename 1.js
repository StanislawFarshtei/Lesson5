/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

// console.log(f2(2)); // 8

// exports.f = f;

const f = function(num) {
    if (typeof num !== 'number') {
        throw new Error('Is not a number type');
    }
    const cube = num * num * num;
    return cube;
}

console.log(f(2));