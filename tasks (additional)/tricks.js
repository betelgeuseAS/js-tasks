// ...
(function () {
  console.log(idVar);
  var idVar = 'str'; // undefined

  console.log(idConst);
  const idConst = 'str'; // ReferenceError: Cannot access 'idConst' before initialization

  console.log(idLet);
  let idLet = 'str'; // ReferenceError: Cannot access 'idConst' before initialization
});



// ...
(function () {
  let arr = [];

  arr[1] = 1;
  arr[3] = 3;

  console.log(arr.length); // 4
});



// ...
(function () {
  function myFun() {
    let a = (b = 3);
  }

  myFun();

  console.log(b); // 3
});



// ...
(function () {
  let squares = [2, 4, 6].map(x => x * x);
  [a, b] = squares;

  console.log(a + b); // 20
});



// ...
(function () {
  let interval = setInterval(() => console.log("Hi"), 1000);
  let timeout = setTimeout(() => console.log("Hi"), 1000);

  console.log(interval, timeout); // unique ids
});



// ...
(function () {
  var a = 5;
  var test = 5 != a ? "Yes" : "No";

  console.log(test); // No
});



// ...
(function () {
  var test = new Array(5).join("5");

  console.log(test); // "5555"
});



// ...
(function () {
  "use strict";

  console.log(typeof null); // object
});



// ...
(function () {
  if (function f() {}) {
    console.log(typeof f); // undefined
  }
});



// ...
(function () {
  const f = function() {
   this.x = 5;

   (function () {
     this.x = 3;
   })();

   console.log(this.x);
  }

  f(); // 3

  /*
    Функція f викликається за допомогою простого виклику - f(), тому це посилається на глобальний об'єкт.
    this.x = 5; // window.x = 5;
    Функціях, що самовикликається, також посилається на глобальний об'єкт.
    (function() {
      this.x = 3;  // window.x = 3;
    })();
    В результаті console.log(window.x); // 3
   */
});



// ...
(function () {
  let dataUser = { name: "Robin" };

  function newUser (dataUser){
    dataUser = { name: "Kate" };
  }

  newUser(dataUser);

  console.log(dataUser.name); // Robin

  /*
    Як аргумент у функцію ми передаємо не об'єкт, а посилання об'єкт (dataUser). Тому під час виконання функції буде
    створено новий об'єкт, який ми присвоюємо (=) для цього посилання. Звичайно, його видно тільки всередині функції.
    А поза функцією це посилання продовжує вказувати на наш вихідний об'єкт, тому виведеться Robin.
   */
});



// ...
(function () {
  console.log(true + false + true); // 2

  /*
    Тут true перетворюється на 1, а false на 0.
    true + false + true = 1 + 0 + 1 = 2.
   */
});



// ...
(function () {
  const theArray = ['1', '2', '3'].map(parseInt);

  console.log(theArray); // [1, NaN, NaN]

  /*
    Array.prototype.map передає у функцію-коллбек 3 аргументи: елемент масиву, індекс елемента та сам масив.
    А у parseInt 2 аргументи: число або подібне до нього і система числення.
   */
});



// Який варіант створення об'єкта не вірний?
(function () {
  // 1. var obj = new Object();
  // 2. let obj = new Object{};
  // 3. let obj = {};
  // 4. let obj = new Object();

  // Правильна відповідь під номером 2.
});



// ...
(function () {
  var var1 = 12;

  (function SelfExecutedTestFun() {
    console.log("value of var1 is:" + var1);

    var var2 = 500;
  })();

  console.log("value of var1 from out side is:" + var1);
  console.log("value of var2 from out side is:" + var2);


  /*
    Наступний код виведе:
    "value of var1 is: 12" "value of var1 from out side is:12" "ReferenceError: var2 is not defined"

    Змінна var1 глобальна і консоль виведе її значення: "value of var1 is:12" "value of var1 from out side is:12".
    Оскільки змінна var2 оголошена всередині функції SelfExecuted вона локальна і консоль виведе:
    "ReferenceError: var2 is not defined"
   */
});



// ...
(function () {
  let a = 5;

  if (a) {
    let a = 2;

    a *= a;
  }

  console.log(a); // 5

  /*
    Тут справа в області видимості змінної оголошеної через let.
    У прикладі фактично дві незалежні змінні а, одна - глобальна, друга - у блоці if.

    Зауважимо, що якщо оголошення let a = 5; у першому рядку видалити, то в консолі буде помилка:
    "ReferenceError: a is not defined".
    Це тому, що змінну let завжди видно саме в тому блоці, де оголошено, і не більше.
   */
});



// Виберіть одну правильну відповідь.
// У якого оператора із перерахованих найвищий пріорітет?
(function () {
  // 1. Присвоєння =
  // 2. Постфіксний інкремент ++
  // 3. Додавання +
  // 4. Ділення /
  // 5. Взведення в степінь **

  /*
    Правильна відповідь під цифрою 2, тобто у постфіксного інкременту, найвищий пріоритет з перерахованих.
    Таблицю пріоритетів ви зможете знайти тут - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
   */
});



// Що нам видасть перший блок коду, якщо ми його запустимо і що нам видасть другий блок коду, якщо ми його також запустимо?
(function () {
  // 1 блок коду
  // let return = 5;
  // let for = 'Hi';
  // let let = false;
  //
  // console.log(return + for + let); // Error

  // 2 блок коду
  let obj = {
    for: 1,
    let: 2,
    return: 3
  }

  console.log(obj.for + obj.let + obj.return); // 6

  /*
    Якщо ми запусти перший скрипт, він видасть помилку: "SyntaxError: Illegal return statement".
    Якщо ми запустимо другий скрипт, все буде працювати і console нам виведе: 6.

    Зарезервовані слова можна використовувати як імена властивостей.
    Ім'я змінної не може збігатися із зарезервованими словами, такими як 'for', 'let', 'return' і т.д.
    Але для властивостей об'єкта такого обмеження немає.
   */
});



// ...
(function () {
  for (var i = 0; i < 10; i++){
    setTimeout(function (){
      console.log(i);
    }, 0);
  }

  /*
    Результат виконання наступного коду буде: 10 разів виведеться число 10
    Пояснення: 10 разів запуститься відкладений console.log(i), який лежить усередині анонімної
    функції, що створюється щоразу.
   */

  for (let i = 0; i < 10; i++){
    setTimeout(function (){
      console.log(i);
    }, 0);
  }

  /*
    Результат виконання наступного коду буде: виведеться від 0 до 9
    Пояснення: в такому випадку працює замикання завдяки let.
 */
});



// ...
(function () {
  console.log(!5 == !2); // true

  /*
    Виведе: true.

    1. Будь-яке позитивне число у логічному контексті це true.
    2. !ЧИСЛО ПОЗИТИВНЕ в логічному контексті це false.
    3. false == false -> true.
   */
});



// ...
(function () {
  /*
     Що тут зайве?
     number, string, boolean, object, null, undefined, symbol

     Object, оскільки решта примітивні типи даних.
   */
});



// ...
(function () {
  var a = [];

  console.log((a == a) + ' ' + (a == !a)); // true true

  /*
    Код виведе: true true

    У першому виразі все зрозуміло, йде порівняння посилання із самою себе. А в другому операнд "!a"
    перетворюється на boolean і відповідно породжує перетворення на boolean операнда "a".
    []==false (порожній масив => false), ![]==false (посилання на об'єкт (у випадку масив) з оператором ! => false)
    тобто. [] == ![]
   */
});



// ...
(function () {
  console.log(null || 2 && 3 || 4); // 3

  /*
    Пріоритет && вище, ніж ||, тому він виконається першим.
    Результат 2 && 3 = 3, тому вираз набуває вигляду: null || 3 || 4
    Тепер результатом є перше істинне значення: 3
   */
});



// ...
(function () {
  function a(val) {
    return true - val;
  }

  let b = a('4') + a('-4') + a('-4') + a('4'); // 4

  /*
    Виведе: 4

    Усередині функції є знак '-', отже коли відбуваються обчислення він перетворює на число:
    true -> 1
    '4' -> 4
    '-4' -> -4
    А далі — звичайні математичні обчислення.
   */
});



// ...
(function () {
  let x = 5;

  x = (x++, x = addFive(x), x *= 2, x -= 5, x += 10);

  function addFive(num){
    return num + 5;
  }

  console.log(x); // 27

  /*
    У консоль виведе: 27

    Пояснення:
    Спочатку ми збільшуємо значення x до 6, потім ми викликаємо функцію addFive(6) і присвоюємо результат x новому
    значенню, х стає рівним 11. Після цього ми множимо поточне значення х на 2, оновлене значення х буде 22.
    Потім ми віднімаємо від x 5 і оновлене значення дорівнюватиме 17. І, нарешті, ми збільшуємо значення x на 10,
    тепер значення x буде 27.
   */
});



// ...
(function () {
  let bool = new Boolean(false);

  if (bool) {
    console.log('True');
  } else {
    console.log('False');
  }

  /*
    Виведе: True

    let bool = new Boolean(false); - Цей рядок створює об'єкт, у логічному контексті об'єкт завжди приймає true.
   */
});



// ...
(function () {
  let obj = new Object();

  console.log(obj.a); // undefined

  obj.a = 5;

  console.log(obj.a); // 5
});



// ...
(function () {
  console.log(false == undefined); // false
  console.log(false == null); // false
  console.log(null == undefined); // true
});



// ...
(function () {
  let a = [],
      b = 1,
      c = false,
      d = [];

  console.log(`${typeof (b == c)}, ${(a == d)}`); // boolean, false

  /*
    Виведе: boolean, false

    1) Вираз: typeof (b == c) // boolean
    Підставимо значення змінні: (1 == false) -> false, тому що 1 не може дорівнювати false.
    Далі ми отримуємо тип: typeof false -> boolean.

    2) Вираз: (a == d) // false
    Підставимо значення змінні: (a[] == d[]) -> false
   */
});



// ...
(function () {
  // const foo = function(){
  //   return
  //   {
  //     a: 1, b: 2, c: 3
  //   }
  // }

  /*
    После выполнение кода произойдет: Синтаксическая ошибка SyntaxError.

    Произойдет SyntaxError так как после return стоит символ перевода каретки, то компилятор автоматически добавит
    там точку с запятой, что призведет к ошибке.
  */
});



// Ланцюжок викликів
(function () {
  let ladder = {
    step: 0,
    up() {
      this.step++;

      return this;
    },
    down() {
      this.step--;

      return this;
    },
    showStep() {
      console.log(this.step);

      return this;
    }
  }

  ladder.up().up().down().up().down().showStep(); // 1
});



// ...
(function () {
  // let user = {
  //   name: "Кейбл",
  //   go: function() { console.log(this.name) }
  // }
  //
  // (user.go)();

  /*
    Выдаст ошибку: ReferenceError: user is not defined

    Сообщение об ошибке в большинстве браузеров не даёт понимания, что же пошло не так.

    Ошибка появляется, потому что точка с запятой пропущена после user = {...}.

    JavaScript не вставляет автоматически точку с запятой перед круглой скобкой (user.go)(), поэтому
    читает этот код так:
    let user = { go:... }(user.go)()

    Теперь мы тоже можем увидеть, что такое объединённое выражение синтаксически является вызовом
    объекта { go: ... } как функции с аргументом (user.go). И это происходит в той же строчке с объявлением
    переменной let user, т.е. объект user ещё даже не определён, поэтому получается ошибка.

    Если мы вставим точку с запятой – всё заработает:
  */

  let user = {
    name: "Кейбл",
    go: function() { console.log(this.name) }
  };

  (user.go)()
});



// ...
(function () {
  let a = 20;

  (function () {
    let b = 20;

    a = '11';

    (function () {
      let c = 2;

      console.log((a + b) / c)
    })();
  })();

  /*
    Здесь нужно знать как преобразуются типы. В последней анонимной функции в console получается так, если подставим
    значения переменным:
    console.log(('11' + 20) / 2); // 560

    1) '11' + 20 = '1120' // при складывании строки и числа получаем строку, при этом числа как бы склеиваются
    2) '1120' / 2 = 560 // при делении строки на число, получаем число
  */
});



// Check if NaN
(function () {
  const val = NaN;

  console.log('-> ', val === val); // false
  console.log('-> ', isNaN(val)); // true
});



// ...
(function () {
  let x = 5;
  x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);

  function addFive(num) {
    return num + 5;
  }

  console.log(x); // 27
});



// ...
(function () {
  let bool = new Boolean(false);

  if (bool) console.log(true);
  else console.log(false);

  // Виведе: true
  // Цей рядок створює об'єкт, у логічному контексті об'єкт завжди приймає true
});



// ...
(function () {
  console.log(false == undefined); // false
  console.log(false == null); // false
  console.log(null == undefined); // true

  console.log(typeof (1 == false), ([] == [])); // boolean, false
});



// ...
(function () {
  // Виконання цього коду видасть помилку.
  // Помилка з'являється, тому що крапка з комою пропущена після user = {...}.
  // JavaScript не вставляє автоматично крапку з комою перед круглою дужкою.

  // Зверніть увагу, що круглі дужки навколо (user.go) нічого не означають. Зазвичай вони визначають послідовність
  // операцій (оператор групування), але тут виклик методу через крапку . спрацьовує першим у будь-якому випадку,
  // тому групування ні на що не впливає. Тільки крапка з комою має значення.

  // let user = {
  //   name: "Кейбл",
  //   go: function() { alert(this.name) }
  // }
  // (user.go)()
});



// ...
(function () {
  var cars = ['Ford', 'Mazda', 'Kia', 'BMW'];
  console.log(cars.indexOf('kia')); // -1
  // Тому що indexOf не знайде значення "kia", у масиві є тільки "Kia".
});



// ...
(function () {
  var e; e = 'str' - 2;
  if (e != e) console.log(true);
  else console.log(false);
  // Виведе true.
  // e = 'a0ff' - 2; Виходить NaN
  // Далі йде перевірка, якщо якщо NaN != NaN, то виводимо true. А NaN не дорівнює NaN.
});



// ...
(function () {
  // <div onclick="console.log('div')">
  //   <p onclick="console.log('p')">Click me!</p>
  // </div>

  // Веде спершу "p", а потім "div".
  // Тут працює Спливання і занурення в JS - https://learn.javascript.ru/bubbling-and-capturing
});



// ...
(function () {
  console.log(document.body.parentNode === document.documentElement); // true
  // Виведе true, оскільки document.documentElement повертає корінний елемент документа document, тобто елемент
  // <html>, і document.body.parentNode виведе батька елемента body, тобто <html>.
});



// ...
(function () {
  // 1. "" + 1 + 0 = "10" (1)
  // 2. "" - 1 + 0 = -1 (2)
  // 3. true + false = 1
  // 4. 6 / "3" = 2
  // 5. "2" * "3" = 6
  // 6. 4 + 5 + "px" = "9px"
  // 7. "$" + 4 + 5 = "$45"
  // 8. "4" - 2 = 2
  // 9. "4px" - 2 = NaN
  // 10. 7 / 0 = Infinity
  // 11. " -9 " + 5 = " -9 5" (3)
  // 12. " -9 " - 5 = -14(4)
  // 13. null + 1 = 1 (5)
  // 14. undefined + 1 = NaN (6)

  // 1. Додавання з рядком "" + 1 перетворює 1 на рядок: "" + 1 = "1", і в наступному випадку "1" + 0, працює те саме правило.
  // 2. Віднімання - (як і більшість математичних операторів) працює тільки з числами, порожній рядок "" приводиться до 0.
  // 3. Додавання з рядком перетворює число 5 на рядок і додає до рядка.
  // 4. Віднімання завжди перетворює до числа, отже рядок " -9 " стає числом -9 (пробіли по краях обрізаються).
  // 5. null стає 0 після чисельного перетворення.
  // 6. undefined стає NaN після чисельного перетворення.
});



// Disable consoles.
(function () {
  console.log = console.warn = console.error = () => {};
});



// ...
(function () {
  console.log([] + null + 1); // null1
  console.log("foo" + + "bar"); // fooNaN (+ "bar" пробує перетворити в число, то отримуємо NaN, далі конкатинаці рядків)
  console.log(!!"false" == !!"true"); // true
});


// ...
(function () {
  console.log("a" && "" && "c"); // ""
  console.log("a" && "" || "c"); // "c"
  console.log("" ?? "a"); // "" (?? працює тільки з null та undefined, всі інші falsy йього оператора не цікавлять)
});



// ...
(function () {

})();
