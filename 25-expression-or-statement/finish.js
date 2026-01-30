/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15  // выражение

const myObject = {
  x: 10,
  y: true,
}             //выражение 

myObject.z = 'abc' //выражение 

delete myObject.x // инструкция-выражение

let newVariable // инструкция

newVariable = 30 + 5 //инструкция - выражение 

console.log(newVariable) // инструкция - выражение 

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`) 
}                                            // инструкция - выражение 
