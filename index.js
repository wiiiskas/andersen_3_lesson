const concatStrings = require('./concatStrings');

//Добавил String, так как node js не соображает с function[Symbol.toPrimitive]// выдает  функцию строкой
// В Vanila все работает
console.log( String(concatStrings('first')('second')('third')())); // 3
console.log( String(concatStrings('first', null)('second')()('third')));
console.log( String(concatStrings('first', '123')('second')('third')()));
console.log(String(concatStrings('some-value')('')('')(null)));
console.log(String(concatStrings('some-value')(2)));
console.log(String(concatStrings('some-value')('333')(123n)('end')));

