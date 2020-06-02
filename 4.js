/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 *
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// // Решение
//
// f(1); // Воскресенье
// f(4); // Среда
//
// exports.f = f;

const f = function (num) {

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('Not a number type!');
        }

        if (arguments[i] < 1 || arguments[i] > 7) {
            throw new Error('Input should be in the range of 1-7');
        }

        let day = arguments[i];

        switch (day) {

            case 1:
                return 'Воскресенье';
            case 2:
                return 'Понедельник';
            case 3:
                return 'Вторник';
            case 4:
                return 'Среда';
            case 5:
                return 'Четверг';
            case 6:
                return 'Пятница';
            case 7:
                return 'Суббота';
        }

    }

}


console.log(f(0));
console.log(f(8));
