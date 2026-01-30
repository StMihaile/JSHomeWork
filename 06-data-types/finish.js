/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const sayHello = 'Привет'
const a = 34;
const isTrue = true;
const b = null;
const c = undefined;
const myObj = {
    name: 'Mihaile',
    profession: 'Разработчик'
}

const myArr = [5,4,1];
console.log(typeof(sayHello));
console.log(typeof(a));
console.log(typeof(isTrue));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(myObj));
console.log(typeof(myArr));

