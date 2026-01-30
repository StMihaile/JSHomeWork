/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const cars = [
    {    carBrand: 'bmw', 
         price: 10000,
         isAvailableForSale: true,
    },

     {    carBrand: 'lada', 
         price: 1000,
         isAvailableForSale: false
    },

     {    carBrand: 'fiat', 
         price: 2000,
         isAvailableForSale: true
    }
]

cars.push( {    carBrand: 'ford', 
         price: 5000,
         isAvailableForSale: false
    })

    console.log(cars);