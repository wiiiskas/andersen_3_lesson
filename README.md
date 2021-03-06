## Задание №3:
- Вывести в консоль результат: `npm start` 🚀
- Тесты по заданию: `npm test` 🚀
- Решение задачи: /concatString.js
- Библиотеки: -D `jest`

1) Реализовать функцию `concatStrings`, которая может быть вызвана следующим образом:
   `concatStrings('first')('second')('third')()`.

   - Результатом вызова данной функции должна являться новая строка, содержащая все переданные таким образом строки.
   - Если одно из значений является невалидной строкой (пустая строка - это валидная строка),
   то возвращать результат, полученный до текущего момента (ошибок не бросать!)
   - Кроме этого добавить функции второй необязательный параметр - `separator`.
   Он также должен являться валидной строкой, однако в случаях, когда вместо валидной строки на его место передано
   что-то ещё - запускаем функцию как будто без него вообще
   (иными словами игнорируем, никаких ошибок кидать не нужно).
   - Если же всё-таки параметр был валидной строкой, то результирующая строка должна содержать все преденные строки,
   разделённые значчением `separator`.

#### Примеры:
>Вызываем функцию: concatStrings('first')('second')('third')()
Получаем результат: 'firstsecondthird'

>Вызываем функцию: concatStrings('first', null)('second')()('third')
Получаем результат: 'firstsecond'

>Вызываем функцию: concatStrings('first', '123')('second')('third')()
Получаем результат: 'first123second123third'


>Вызываем функцию: concatStrings('some-value')('')('')(null)
Получаем результат: 'some-value'

>Вызываем функцию: concatStrings('some-value')(2)
Получаем результат: 'some-value'

>Вызываем функцию: concatStrings('some-value')('333')(123n)('end')
Получаем результат: 'some-val333'