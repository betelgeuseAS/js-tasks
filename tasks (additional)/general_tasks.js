// 1. Анаграма
// Визначити чи є рядок анаграмою. Складається з тих самих символів (listen -> silent).
(function () {
  // Варіант 1
  // function aclean(arr) {
  //   let obj = {};
  //
  //   for (let i = 0; i < arr.length; i++) {
  //     let sorted = arr[i].toLowerCase().split("").sort().join("");
  //     obj[sorted] = arr[i];
  //   }
  //
  //   return Object.values(obj);
  // }
  //
  // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  //
  // console.log(aclean(arr));

  // Варіант 2
  const buildCharObject = str => {
    const charObj = {}

    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
      charObj[char] = charObj[char] + 1 || 1
    }

    return charObj
  }

  const anagram = (strA, strB) => {
    const aCharObject = buildCharObject(strA)
    const bCharObject = buildCharObject(strB)

    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
      return false
    }

    for(let char in aCharObject) {
      if(aCharObject[char] !== bCharObject[char]) {
        return false
      }
    }

    return true
  }

  console.log(anagram('listen', 'silent'));
});



// 2. Паліндромом
// Визначити чи є рядок паліндромом. Послідовність символів, що однаково читається в обох напрямках.
(function () {
  // Варіант 1
  // function palindrome(str) {
  //   let check = '';
  //
  //   for (let i = str.length - 1; i >= 0; --i) {
  //     check += str[i];
  //   }
  //
  //   return str === check;
  // }
  //
  // console.log(palindrome('pap'));

  // Варіант 2
  const palindrome = str => {
    str = str.toLowerCase()

    return str === str.split('').reverse().join('')
  }

  console.log(palindrome('pap'));
});



// 3. Фібоначчі
// Вывести n-е число Фибоначчи. Это ряд чисел, где каждое последующее является сумой двух предодущих.
(function () {
  // Варіант 1
  // const fibonacci = num => {
  //   const result = [0, 1]
  //
  //   for(let i = 2; i <= num; i++) {
  //     const prevNum1 = result[i - 1]
  //     const prevNum2 = result[i - 2]
  //
  //     result.push(prevNum1 + prevNum2)
  //   }
  //
  //   return result[num]
  // }
  //
  // console.log(fibonacci(8))

  // Варіант 2
  // function fibonacci(n) {
  //   const sequence = [1, 1]
  //
  //   if (n < 2) {
  //     return sequence.slice(0, n)
  //   }
  //
  //   while (sequence.length < n) {
  //     const last = sequence[sequence.length - 1]
  //     const prev = sequence[sequence.length - 2]
  //
  //     sequence.push(last + prev)
  //   }
  //
  //   return sequence
  // }

  // Варіант 3
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
  }

  console.log(fib(3))
  console.log(fib(8))
});



// 4. Знайти найдовший префікс серед заданих рядків (line, listen, library -> li).
(function () {
  const getCommonPrefix = (prefix, str2) => {
    let result = '';

    for (
      let i = 0, j = 0;
      i < prefix.length && j < str2.length;
      i++, j++
    ) {
      if (prefix[i] != str2[j]) {
        break
      }

      result += prefix[i];
    }

    return result;
  }

  function getLongestCommonPrefix(arr) {
    // Варіант 1
    // let prefix = arr[0];
    //
    // for (let i = 1; i < arr.length; i++) {
    //   prefix = getCommonPrefix(prefix, arr[i]);
    // }
    //
    // return prefix;

    // Варіант 2
    arr.sort();

    const minLength = Math.min(arr[0].length, arr[arr.length - 1].length);
    let i = 0;

    while (i < minLength && arr[0][i] === arr[arr.length -1][i]) {
      i++
    }

    return arr[0].substring(0, i);
  }

  // O(n * m) (First)
  // O(nlogn + minLen) (Second)
  const arr = ['abc123', 'abcd123', 'abcde123', 'abcdefg123'];
  console.log(getLongestCommonPrefix(arr)); // abc
});



// 5. Перевірити чи є число простим.
(function () {
  function isPrimeNum(num){
    for (var i = 2; i < num; i++) {
      if (num % i === 0){
        return false;
      }
    }

    return true;
  }

  console.log(isPrimeNum(3));
});



// 6. Вивести прості числа.
(function () {
  function allPrimeNum(n) {
    nextPrime:
      for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }

        console.log(i);
      }
  }

  allPrimeNum(10);
});



// 7. FizzBuzz
// Потрібно написати функцію, що виводить у консоль числа від 1 до n, де n - це ціле число, яка функція приймає як
// параметр, з такими умовами:
// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.
(function () {
  // Variant 1
  // const fizzBuzz = num => {
  //   for(let i = 1; i <= num; i++) {
  //     if(i % 3 === 0 && i % 5 === 0) {
  //       console.log('fizzbuzz')
  //     } else if(i % 3 === 0) {
  //       console.log('fizz')
  //     } else if(i % 5 === 0) {
  //       console.log('buzz')
  //     } else {
  //       console.log(i)
  //     }
  //   }
  // }
  //
  // fizzBuzz(15)

  // Variant 2
  const fizzBuzz = num => {
    let result = '';

    if(num % 2 === 0) result += 'fizz';
    if(num % 3 === 0) result += 'buzz';

    return result;
  }

  console.log(fizzBuzz(6)); // 'fizzbuzz'
});



// 8. Пошук голосних
// Потрібно написати функцію, яка приймає рядок як аргумент і повертає кількість голосних, які містяться в рядку.
// Голосними є "a", "e", "i", "o", "u".
(function () {
  // Варіант 1
  // const findVowels = str => {
  //   let count = 0
  //
  //   const vowels = ['a', 'e', 'i', 'o', 'u']
  //
  //   for(let char of str.toLowerCase()) {
  //     if(vowels.includes(char)) {
  //       count++
  //     }
  //   }
  //
  //   return count
  // }
  //
  // console.log(findVowels('Find Vowels'))

  // Варіант 2
  const findVowels = str => {
    const matched = str.match(/[aeiou]/gi)

    return matched ? matched.length : 0
  }

  console.log(findVowels('Find Vowels'))
});



// 9. Унікальність всіх символів в рядку
// Напишіть функцію, яка визначає чи унікальні всі символи в рядку. Реєстр повинен враховуватися: 'a' та 'A' різні
// символи.
(function () {
  function isUnique(str) {
    // Варіант 1
    // for (let i = 0; i < str.length; i++) {
    //   if (str.lastIndexOf(str[i]) !== i) {
    //     return false
    //   }
    // }
    //
    // return true

    // Варіант 2
    // const chars = new Set()
    //
    // for (let i = 0; i < str.length; i++) {
    //   const current = str[i]
    //
    //   if (chars.has(current)) {
    //     return false
    //   }
    //
    //   chars.add(current)
    // }
    //
    // return true

    // Варіант 3
    return new Set(str).size === str.length
  }

  console.log(isUnique('abcdef')) // true
  console.log(isUnique('1234567')) // true
  console.log(isUnique('abcABC')) // true
  console.log(isUnique('abcadef')) // false
});



// 10. Плоский масив
// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В
// результате должны получить новый одномерный массив.
(function () {
  function flatten(array) {
    const res = []

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        const flat = flatten(array[i])

        for (let j = 0; j < flat.length; j++) {
          res.push(flat[j])
        }
      } else {
        res.push(array[i])
      }
    }

    return res
  }

  console.log(
    flatten([1, [2, 3], [4, 5, [6, 7]], 8]) // [1, 2, 3, 4, 5, 6, 7, 8]
  )
});



// 11. Видалення всіх значень, що повторюються, в рядку
// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
(function () {
  function removeDupes(str) {
    // Варіант 1
    // const chars = {}
    // const res = []
    //
    // for (let i = 0; i < str.length; i++) {
    //  if (!chars[str[i]]) {
    //    chars[str[i]] = true
    //
    //    res.push(str[i])
    //  }
    // }
    //
    // return res.join('')

    // Варіант 2
    return Array.from(new Set(str)).join('')
  }

  console.log(removeDupes('abcd')) // 'abcd'
  console.log(removeDupes('aabbccdd')) // 'abcd'
  console.log(removeDupes('abcddbca')) // 'abcd'
  console.log(removeDupes('abababcdcdcd')) // 'abcd'
});



// 12. Какая строка встречается чаще всего
// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если
// таких строк несколько, то нужно вернуть первую, идя слева на право.
(function () {
  function highestFrequency(array) {
    const map = {}

    let maxFreq = 0
    let maxFreqStr = array[0]

    for (let i = 0; i < array.length; i++) {
      const current = array[i]

      if (map[current]) {
        map[current]++
      } else {
        map[current] = 1
      }

      if (map[current] > maxFreq) {
        maxFreq = map[current]
        maxFreqStr = current
      }
    }

    return maxFreqStr
  }

  console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // c
  console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // abc
  console.log(highestFrequency(['abc', 'def'])) // abc
  console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // ghi
});



// 13. Чи повернуто рядок?
// Напишіть функцію, яка приймає 2 рядки. Поверніть true, якщо рядки є перевернутим варіантом один одного. Інакше
// поверніть false.
(function () {
  function isStringRotated(source, test) {
    // Варіант 1
    // if (source.length !== test.length) {
    //   return false
    // }
    //
    // for (let i = 0; i < source.length; i++) {
    //   const rotate = source.slice(i, source.length) + source.slice(0, i)
    //
    //   if (rotate === test) {
    //     return true
    //   }
    // }
    //
    // return false

    // Варіант 2
    return source.length === test.length && (source + source).includes(test)
  }

  console.log(isStringRotated('javascript', 'scriptjava')) // true
  console.log(isStringRotated('javascript', 'iptjavascr')) // true
  console.log(isStringRotated('javascript', 'java')) // false
});



// 14. Чи є масив підмножиною іншого масиву
// Напишіть функцію, яка перевіряє, чи є другий масив підмножиною першого. Тобто чи є елементи другого масиву у першому.
(function () {
  function arraySubset(source, subset) {
    if (source.length < subset.length) {
      return false
    }

    for (let i = 0; i < subset.length; i++) {
      const index = source.indexOf(subset[i])
      if (index === -1) {
        return false
      }
      delete source[index]
    }
    return true
  }

  console.log(arraySubset([2, 1, 3], [1, 2, 3])) // true
  console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // true
  console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // false
  console.log(arraySubset([1, 2], [1, 2, 3])) // false
});



// 15. Анаграми
// Напишіть функцію, яка перевіряє, чи всі елементи в масиві є анаграмами один одного.
(function () {
  function allAnagrams(array) {
    const sorted = array.map(str => str.split('').sort().join(''))

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] !== sorted[0]) {
        return false
      }
    }

    return true
  }

  console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
  console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
});



// 16. Перевернути матрицю 3х3
// Напишіть функцію, яка приймає матрицю 3х3 і перевертає на 90 градусів за годинниковою стрілкою.
// Додатково: Напишіть ще дві функції, які перевертають матрицю на 180 і 270 градусів.
// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]
// [7, 8, 9]    [9, 6, 3]
(function () {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  function rotate(source) {
    const newMatrix = source[0].map(() => [])

    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < source[0].length; j++) {
        newMatrix[j][source.length - 1 - i] = source[i][j]
      }
    }

    return newMatrix
  }

  function rotate180(source) {
    return rotate(rotate(source))
  }

  function rotate270(source) {
    return rotate180(rotate(source))
  }

  console.log(rotate(matrix))
});



// 17. Простий пошук
// Напишіть функцію, яка приймає відсортований масив з числами та числом. Необхідно повернути індекс числа, якщо
// воно є у масиві. Інакше повернути `-1`.
(function () {
  // Time: O(n)
  function search(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i
      }
    }

    return -1
  }

  // Time: O(log(n))
  function binary(array, target) {
    let start = 0
    let end = array.length - 1

    if (target < array[start] || target > array[end]) {
      return -1
    }

    while (true) {
      if (target === array[start]) {
        return start
      }

      if (target === array[end]) {
        return end
      }

      if (end - start <= 1) {
        return -1
      }

      const middle = Math.floor((start + end) / 2)

      if (target > array[middle]) {
        start = middle + 1
      } else if (target < array[middle]) {
        end = middle - 1
      } else {
        return middle
      }
    }
  }

  console.log(search([1, 3, 6, 13, 17], 13)) // 3
  console.log(search([1, 3, 6, 13, 17], 12)) // -1
});



// 18. Збалансовані дужки
// Напишіть функцію, яка перевірить рядок на збалансованість дужок: `{}, (), []`. Повернути `true` якщо вони
// збалансовані, інакше `false`.
(function () {
  function isBalanced(string) {
    const start = '({['
    const end = ']})'

    const map = {
      '}': '{',
      ')': '(',
      ']': '['
    }

    const queue = []

    for (let i = 0; i < string.length; i++) {
      const char = string[i]

      if (start.includes(char)) {
        queue.push(char)
      } else if (end.includes(char)) {
        const last = queue.pop()

        if (map[char] !== last) {
          return false
        }
      }
    }

    return !queue.length
  }

  console.log(isBalanced('(x + y) - (4)')) // true
  console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // true
  console.log(isBalanced('[{()}]')) // true
  console.log(isBalanced('(50)(')) // false
  console.log(isBalanced('[{]}')) // false
});



// 19. Черга з О(1) складністю операцій
// Створіть чергу, в якій будуть реалізовані операції на додавання елементів в кінець черги, видалення першого
// елемента та обчислення розміру черги зі складністю алгоритму `О(1)`.
(function () {
  // Варіант 1
  class LinkedList {
    #length = 0

    constructor() {
      this.head = null
      this.tail = null
    }

    addToTail(value) {
      const node = {
        value,
        next: null
      }

      if (this.#length === 0) {
        this.head = node
        this.tail = node
      } else {
        this.tail = node
      }

      this.#length++
    }

    removeFromHead() {
      if (this.#length === 0) {
        return
      }

      const value = this.head.value

      this.head = this.head.next
      this.#length--

      return value
    }

    size() {
      return this.#length
    }
  }

  class Queue extends LinkedList {
    constructor() {
      super()

      this.enqueue = this.addToTail
      this.dequeue = this.removeFromHead
    }

    get size() {
      return super.size()
    }
  }

  // Варіант 2
  // class Queue {
  //   #storage = {}
  //   #last = 0
  //   #first = 0
  //
  //   enqueue(item) {
  //     this.#storage[this.#last] = item
  //     this.#last++
  //   }
  //
  //   dequeue() {
  //     if (this.size === 0) {
  //       return
  //     }
  //
  //     const value = this.#storage[this.#first]
  //     delete this.#storage[this.#first]
  //     this.#first++
  //     return value
  //   }
  //
  //   get size() {
  //     return this.#last = this.#first
  //   }
  // }
});



// 20. Deep Equal
// Напишіть функцію, яка перевірятиме на “глибоку” рівність 2 вхідних параметрів.
(function () {
  function deepEqual(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
      return true
    }


    if (typeof a !== typeof b) {
      return false
    }

    if (typeof a !== 'object' || a === null || b === null) {
      return a === b
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }

    for (const key of Object.keys(a)) {
      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }

    return true
  }

  const source = { a: 1, b: { c: 1 } }
  const test1 = { a: 1, b: { c: 1 } }
  const test2 = { a: 1, b: { c: 2 } }

  console.log(deepEqual(source, test1)) // true
  console.log(deepEqual(source, test2)) // false
  console.log(deepEqual(NaN, NaN)) // true
  console.log(deepEqual('test', 'test!')) // false
  console.log(deepEqual()) // true
});



// 21. Своя функція bind
// Реалізуйте функцію bind.
(function () {
  Function.prototype.myBind = function(context, ...args) {
    return (...rest) => {
      return this.call(context, ...args.concat(rest))
    }
  }

  function log(...props) {
    console.log(this.name, this.age, ...props)
  }

  const obj = { name: 'Name', age: 28 }

  log.myBind(obj, 1, 2)()
});



// 22. Універсальна сума (Каррінг)
// Напишіть функцію, що складає 2 числа. Працювати функція повинна як показано на прикладах.
(function () {
  function add(a, b) {
    if (!a) {
      return add
    }

    if (!b) {
      return function calc(c) {
        if (!c) return calc

        return a + c
      }
    }

    return a + b
  }

  add(20, 22) // 42
  add(20)(22) // 42
  add(20)()(22) // 42
  add(20)()()()(22) // 42
  add(20)()()()()()()()()()()()(22) // 42
  add()(20)(22) // 42
  add()()()()(20)(22) // 42
  add()(20)()(22) // 42
  add()()()()()(20)()()()(22) // 42
});



// 22. GroupBy
// Напишіть функцію groupBy.
(function () {
  function groupBy(array, fn) {
    return array.reduce((res, current) => {
      const key = typeof fn === 'function' ? fn(current) : current[fn]

      if (!res[key]) {
        res[key] = []
      }

      res[key].push(current)

      return res
    }, {})
  }

  groupBy([6.1, 4.2, 6.3], Math.floor) // { '4': [4.2], '6': [6.1, 6.3] }
  groupBy(['one', 'two', 'three'], 'length') // { '3': ['one', 'two'], '5': ['three'] }
});



// Найдите числа, которые делятся на заданное число
(function () {
  // Variant 1
  // const divisibleBy = (numbers, divisor) => {
  //   const result = [];
  //
  //   numbers.forEach(item => {
  //     if (item % divisor === 0) result.push(item);
  //   });
  //
  //   return result;
  // }
  // console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

  // Variant 2
  const divisibleBy = (numbers, divisor) => numbers.filter(item => item % divisor === 0);
  console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
});



// Створити функцію id яка буде повертати значення на один більше. Наприклад:
// console.log(id()); // 0
// console.log(id()); // 1
// console.log(id()); // 2
// console.log(id()); // 3
// console.log(id()); // 4
(function () {
  // Variant 1
  // function id() {
  //   let id = Symbol.for("id");
  //
  //   id in window ? window[id] += 1 : window[id] = 0;
  //
  //   return window[id];
  // }
  //
  // console.log(id());
  // console.log(id());
  // console.log(id());

  // Variant 2
  function getId() {
    let id = 0;

    return function() {
      id += 1;
      return id;
    };
  }

  const id = getId();

  console.log(id());
  console.log(id());
  console.log(id());
});



// Remove duplicates in an Array
(function () {
  // Method 1 - Use Set
  // let chars = ['A', 'B', 'A', 'C', 'B'];
  // let uniqueChars = [...new Set(chars)];
  //
  // console.log(uniqueChars);

  // Method 2 - Using the indexOf() and filter() methods
  // let chars = ['A', 'B', 'A', 'C', 'B'];
  //
  // let dupChars = chars.filter((element, index) => {
  //   return chars.indexOf(element) !== index;
  // });
  //
  // console.log(dupChars);

  // Method 3 - Using the includes() and forEach() methods
  let chars = ['A', 'B', 'A', 'C', 'B'];

  let uniqueChars = [];
  chars.forEach((element) => {
    if (!uniqueChars.includes(element)) {
      uniqueChars.push(element);
    }
  });

  console.log(uniqueChars);
});



// Capitalize first letter
(function () {
  // Method 1
  // const capitalizeFirstLetter = (string) => string[0].toUpperCase() + ststringr.substr(1);

  // Method 2
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
});



// Сортування
(function () {
  // Method 1
  // const arr = [7, 8, 1, 3, 8, 7, 9, 3];
  // const sorted = arr.sort((a, b) => {
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //
  //   return 0
  // });

  // Method 2
  const arr = [7, 8, 1, 3, 8, 7, 9, 3];
  const sorted = arr.sort((a, b) => a-b); // a-b -> asc, b-a ->desc

  console.log(sorted);
});



// Маємо url рядок такого типу:
// "user.name.fristname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark"
//
// Напишіть функцію яка повертає цей рядок в такому вигляді:
// // {
// //   user: {
// //     name: {
// //       fristname: "Bob",
// //       lastname: "Smith"
// //     },
// //     favoritecolor: "Light Blue"
// //   },
// //   experiments: {
// //     theme: "dark"
// //   }
// // }
(function () {
  const inData = "user.name.fristname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";

  function prepare(str) {
    const parts = str.split("&");
    const result = {};

    parts.forEach((itemPart) => {
      const nameValueParts = itemPart.split("=");
      const name = nameValueParts[0];
      const value = decodeURI(nameValueParts[1]);

      result[name] = value;
    });

    return result;
  }

  function deepen(obj) {
    const result = {};

    // For each object path (property key) in the object
    for (const objectPath in obj) {
      // Split path into component parts
      const parts = objectPath.split(".");

      // Create sub-objects along path as needed
      let target = result;
      while (parts.length > 1) {
        const part = parts.shift();
        target = target[part] = target[part] || {};
      }

      // Set value at end of path
      target[parts[0]] = obj[objectPath];
    }

    return result;
  }

  function queryObjective(str) {
    const prepared = prepare(str);
    const result = deepen(prepared);

    console.log("Result: ", result);

    return result;
  }

  queryObjective(inData);
});



// Знайти щасливе число. Щасливе число те яке в рядку зустрічається скільки разів
// скільки ж і є це саме число. Тобто із числа/рядка 221333 щасливе число є 3.
// Якщо декілька щасливих чисел, то повернути найбільше, якщо немає щасливого
// числа, то повернути нуль
(function () {
  function findLucky(numbers) {
    if (typeof numbers === "number") numbers = String(numbers);

    const mapObject = {};

    [...numbers].forEach((item, index) => {
      if (!mapObject.hasOwnProperty(item)) mapObject[item] = 0;

      mapObject[item] += 1;
    });

    const goodNumbers = [];

    for (const property in mapObject) {
      if (Number(property) === Number(mapObject[property])) {
        goodNumbers.push(Number(property));
      }
    }

    return goodNumbers.length > 0 ? Math.max(...goodNumbers) : 0;
  }

  const numbers = "11255552533";
  console.log("Result: ", findLucky(numbers));
});



// Ланцюжок викликів.
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
    showStep: function () {
      console.log(this.step);
      return this;
    }
  };

  ladder.up().up().down().showStep(); // 1
});



// Поміняти місмцями два значення
(function () {
  // 1. Використання тимчасової змінної
  function swapWithTemp(num1, num2) {
    let temp = num1;

    num1 = num2;
    num2 = temp;
  }

  // 2. Використання додавання та віднімання
  function swapWithPlusMinus(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
  }

  // 3. Використання присвоювання всередині масиву
  function swapWithArray(num1, num2) {
    num2 = [num1, num1 = num2][0];
  }

  // 4. Використання деструктуризації
  function swapWithDestructuring(num1, num2) {
    [num1, num2] = [num2, num1];
  }
});



// Замикання (Closures) (Каррінг)
(function () {
  function sum(num) {
    let result = 0;

    const calculate = (num) => {
      if (num === undefined) return result;
      result += num;

      return calculate;
    }

    return calculate(num);
  }

  console.log(sum()); // 0
  console.log(sum(2)()); // 2
  console.log(sum(2)(3)()); // 5
});



// Чи однакові символи в рядках
// dog dgo -> true
// dog dfo -> false
// doog ddog -> false
(function () {
  const isOrder = (firstString, secondString) => {
    // Variant 1
    // if (firstString.length !== secondString.length) return false;

    // const firstReduce = [...firstString].reduce((accumulator, currentValue) => {
    //   return accumulator += currentValue.charCodeAt(0);
    // }, 0);

    // const seconsdReduce = [...secondString].reduce((accumulator, currentValue) => {
    //   return accumulator += currentValue.charCodeAt(0);
    // }, 0);

    // return firstReduce === seconsdReduce;

    // Variant 2
    const letters1 = [...firstString].sort();
    const letters2 = [...secondString].sort();

    return letters1.join() === letters2.join();
  };

  console.log(isOrder("dog", "dgo"));
  console.log(isOrder("dog", "dfo"));
  console.log(isOrder("doog", "ddog"));
});



// Реалізувати flatten метод
(function () {
  function flatten(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      // if(Array.isArray(array[i])) {
      //   result = [...result, ...flatten(array[i])];
      // } else {
      //   result = [...result, array[i]];
      // }

      const extracted = Array.isArray(array[i]) ? flatten(array[i]) : [array[i]];

      result = [...result, ...extracted];
    }

    return result;
  }

  console.log(flatten([[1], [[2, 3]], [[[4]]]])); // [1, 2, 3, 4]
});



// Remove dupes characters in a string
(function () {
  function removeDupes(str) {
    return [...new Set(str)].join('');
  }

  console.log(removeDupes("abcd")); // 'abcd'
  console.log(removeDupes("abcddcba")); // 'abcd'
});



// Що буде виведено?
(function () {
  let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
  });

  promise.then(console.log); // 1
});



// Що буде виведено?
(function () {
  const length = 4;
  const numbers = [];

  for (var i = 0; i < length; i++) {
    numbers.push(i + 1);
  }

  console.log(numbers); // [1, 2, 3, 4]
});



// Знайти найвигідніший день купівлі та продажу зерна
(function () {
  function findProfit(prices) {
    if (!(Array.isArray(prices)
      && prices.length >= 2)) {
      return [];
    }

    let buyDayIndex = 0;
    let sellDayIndex = 1;

    for (let i = 0; i <= prices.length - 1; i++) {
      const currentPrice = prices[i];
      const nextPrice = prices[i + 1];
      const buyPrice = prices[buyDayIndex];
      const sellPrice = prices[sellDayIndex];

      if (buyPrice > sellPrice) {
        buyDayIndex = sellDayIndex;
        sellDayIndex = buyDayIndex + 1;
      } else if (currentPrice > sellPrice) {
        sellDayIndex = i;
      } else if (buyPrice >= sellPrice
        && sellPrice > currentPrice) {
        buyDayIndex = i;
        sellDayIndex = i + 1;
      } else if (sellPrice < currentPrice) {
        sellDayIndex = i;
      }
    }

    return prices[buyDayIndex] < prices[sellDayIndex]
      ? [buyDayIndex, sellDayIndex] : [];
  }

  const bestDays1 = findProfit([13, 6, 3, 4, 10, 2, 3]);
  const bestDays2 = findProfit([13, 5, 5, 2, 6]);
  const bestDays3 = findProfit([1, 6, 4, 10, 2, 11]);
  const bestDays4 = findProfit([4, 4, 3, 1, 1]);

  console.log(bestDays1); // [2, 4]
  console.log(bestDays2); // [3, 4]
  console.log(bestDays3); // [0, 5]
  console.log(bestDays4); // []
});



// Реалізувати затримку для виклику функцій
(function () {
  function someFn() {
    console.log(arguments);
  }

  Function.prototype.delay = function (delay) {
    return function(...args) {
      setTimeout(() => {
        this(...args);
      }, delay);
    }.bind(this);
  };

  const someFnWithDelay = someFn.delay(3000);

  someFn("arg1", 2, []);
  someFnWithDelay("arg2", 2, []);
});



// Порахувати вершини дерева
(function () {
  const binaryTree = {
    value: 1,
    right: {
      value: 1,
      right: { value: 1 },
      left: { value: 1 }
    },
    left: { value: 1 }
  };


  const sumTree = (tree) => {
    let count = 0;

    if (tree?.value) count += tree.value;

    if (tree.left) count += sumTree(tree.left);
    if (tree.right) count +=  sumTree(tree.right);

    return count;
  }

  console.log(sumTree(binaryTree))
});



// Створити сounter
(function () {
  // Method 1:
  function createCounter() {
    let count = 0;

    function increment() {
      count++;
    }

    function decrement() {
      count--;
    }

    return {
      count,
      getCount: () => count,
      increment,
      decrement
    };
  }

  const result = createCounter();

  result.increment();
  result.increment();

  console.log(result.count); // 0
  console.log(result.getCount()); // 2

  // Method 2:
  const createId = () => {
    let id = 0;

    return () => id++;
  }

  const getId = createId();

  console.log(getId()); // 0
  console.log(getId()); // 1
  console.log(getId()); // 2
});



// Memorization
(function () {
  // Without memo
  const clumsysquareWithoutMemo = (num) => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        result++;
      }
    }
    return result;
  };

  console.time("First call");
  console.log(clumsysquareWithoutMemo(9467));
  console.timeEnd("First call");

  // Use the same value two times
  console.time("Second call");
  console.log(clumsysquareWithoutMemo(9467));
  console.timeEnd("Second call");

  console.time("Third call");
  console.log(clumsysquareWithoutMemo(9467));
  console.timeEnd("Third call");

  // With memo
  const memoize = (func) => {
    const results = {};
    return (...args) => {
      const argsKey = JSON.stringify(args);
      if (!results[argsKey]) {
        results[argsKey] = func(...args);
      }
      return results[argsKey];
    };
  };

  const clumsysquareWithMemo = memoize((num) => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        result++;
      }
    }
    return result;
  });

  console.time("First call");
  console.log(clumsysquareWithMemo(9467));
  console.timeEnd("First call");

  // Use the same value two times
  console.time("Second call");
  console.log(clumsysquareWithMemo(9467));
  console.timeEnd("Second call");

  console.time("Third call");
  console.log(clumsysquareWithMemo(9467));
  console.timeEnd("Third call");
});



// Написати функцію sleep, яка зупиняє виконання коду на визначений час.
(function () {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const test = async () => {
    console.log('Начало');
    await sleep(2000); // Приостанавливаем выполнение на 2 секунды
    console.log('Прошло 2 секунды');
  }

  test();
});



// Написати власний promise all (Навіть збережений порядок)
(function () {
  function sleep(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  }

  function fetch1() {
    return sleep(800).then(() => 1)
  }

  function fetch2() {
    return sleep(500).then(() => 2)
  }

  function promiseAll(promises) {
    const results = []
    let count = 0

    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i]().then((result) => {
          count++
          results[i] = result

          if (count === promises.length) {
            resolve(results)
          }
        }).catch((error) => reject(error))
      }
    })
  }

  promiseAll([fetch1, fetch2]).then((results) => {
    console.log(results)
  })
});



// Реалізувати свій forEach, filter, map, reduce
// https://medium.com/swlh/how-to-write-your-own-reduce-filter-and-map-methods-in-javascript-9b1498a48e53
(function () {
  let arr = [1, 2, 3];
  arr[10] = 10;

  // ForEach
  Array.prototype.forEach2 = function (callback, thisArg) {
    if (this == null) {
      throw new Error("Cant iterate over undefined or null");
    }
    let context = this;

    let O = Object(this);

    if (arguments.length > 1) {
      context = thisArg;
    }

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    let len = O.length;

    let i = 0;

    while (i < len) {
      if (i in O) {
        callback.call(context, this[i], i, O);
      }

      i++;
    }
  };

  // arr.forEach2.call(1, (item, index, array) => {
  //   console.log({ item, index });
  // });

  // Filter
  let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

  function isPrime(num) {
    if (num <= 1) return false;
    else if (num === 2) return true;
    else {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return true;
    }
  }

  Array.prototype.filter2 = function (callback, thisArg) {
    if (this == null) {
      throw new Error("Cant iterate over undefined or null");
    }

    let context = this;

    let O = Object(this);

    if (arguments.length > 1) {
      context = thisArg;
    }

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    let len = O.length;

    let res = [];

    for (let i = 0; i < len; i++) {
      if (i in O) {
        let current = this[i];
        if (callback.call(context, current, i, O)) {
          res.push(current);
        }
      }
    }

    return res;
  };

  // let prime = array.filter2(isPrime);
  // console.log(prime);

  //Map
  // let newArray = arr.map(callback(currentValue[, index[, array]]) {
  //     // return element for newArray, after executing something
  // }[, thisArg]);

  let array2 = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

  Array.prototype.map2 = function (callback, thisArg) {
    if (this == null) {
      throw new Error("Cant iterate over undefined or null");
    }
    let context = this;

    let O = Object(this);

    if (arguments.length > 1) {
      context = thisArg;
    }

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    let len = O.length;

    let newArray = [];

    let i = 0;

    while (i < len) {
      if (i in O) {
        newArray[i] = callback.call(context, this[i], i, O);
      }

      i++;
    }

    return newArray;
  };

  let increase1 = (num) => num + 1;
  let mul2 = (num) => num * 2;

  console.log(array2.filter2(isPrime));
  console.log(array2.filter2(isPrime).map2(mul2).map2(increase1));

  // Reduce
  // const array = ['apple','banana','peach','orange'];
  //
  // let fruits  = array.reduce((acc, elem) => {
  //     acc[elem] = 1;
  //     return acc;
  // }, {});
  //
  // console.log(fruits);

  // Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок других элементов.
  let moveZeros = (arr) =>
    arr.reduceRight(
      (acc, val) => (val === 0 ? [...acc, val] : [val, ...acc]),
      []
    );

  // console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

  // Разворачивание массива массивов
  let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ].reduce((a, b) => a.concat(b));

  // console.log(flattened);

  // Если дан двумерный массив целых чисел, верните выровненную версию массива
  //  со всеми целыми числами в отсортированном (возрастающем) порядке.
  // Пример: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]],
  // ваша функция должна вернуть [1, 2, 3, 4, 5, 6, 7, 8, 9].

  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function concatenate(a, b) {
    return a.concat(b);
  }

  const flattenAndSort = (array) => {
    return array.reduce(concatenate, []).sort(subtract);
  };

  console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

  Array.prototype.reduce2 = function (f, result) {
    let i = 0;

    if (arguments.length < 2) {
      i = 1;
      result = this[0];
    }
    for (; i < this.length; i++) {
      result = f(result, this[i], i, this);
    }
    return result;
  };
  let a = [1, 2, 3, 4];

  console.log(a.reduce(add), a.reduce2(add));
  console.log(a.reduce(add, 10), a.reduce2(add, 10));

  // arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

  Array.prototype.reduce3 = function (callback, initialValue) {
    if (this == null) {
      throw new Error("Cant iterate over undefined or null");
    }

    let result;
    let i = 0;

    let O = Object(this);
    let len = O.length;

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    if (arguments.length >= 2) {
      result = initialValue;
    } else {
      if (len === 0) {
        throw new Error("Reduce of empty array with no initial value");
      }
      result = O[i];
      i++;
    }

    for (; i < this.length; i++) {
      if (i in O) {
        result = callback(result, O[i], i, O);
      }
    }

    return result;
  };

  console.log([1, 2, 3, 4].reduce3(add));
  console.log(a.reduce3(concatenate, "X"), a.reduce(concatenate, "X"));
});



// Реалізувати власний reduce
(function () {
  var a = [10, 21, 13, 56];

  function add(a, b) { return a + b }
  function foo(a, b) { return a.concat(b) }

  // Variant 1
  Array.prototype.reduce2 = function (f, result) {
    var i = 0;
    if (arguments.length < 2) {
      i = 1;
      result = this[0];
    }
    for(; i < this.length; i++) {
      result = f(result, this[i], i, this);
    }
    return result;
  };

  // Variant 2
  Array.prototype.myReduce = function(callback){
    var a = 0;

    for(let i = 0; i < this.length; i++) {
      console.log(this[i])

      callback(a = a + this[i])
    }

    return a;
  }

  // console.log(a.reduce(add), a.reduce2(add)) // 100 100
  // console.log(a.reduce(add, 10), a.reduce2(add, 10)) // 110 110
  // console.log(a.reduce(foo, 'X'), a.reduce2(foo, 'X')) // X10211356 X10211356
  console.log(a.myReduce((a, b) => a + b)) // 100
});



// Знайти найбільший і найменший елемент у масиві, не використовуючи Math.max і Math.min.
(function () {
  function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      const item = arr[i]

      if (item < min) {
        min = item;
      } else if (item > max) {
        max = item;
      }
    }

    return { min, max };
  }


  const numbers = [5, 1, 3, 412, 12, 512];
  const result = findMinMax(numbers);

  console.log(`Минимальное значение: ${result.min}`);
  console.log(`Максимальное значение: ${result.max}`);
});



// Обробка даних у масиві певним чином із рішенням O(n).
// Необхідно обробити масив таким чином, щоб розподілити людей за групами міст.
(function () {
  const people = [
    {
      name: 'Alex',
      city: 'Moscow',
    },
    {
      name: 'Ivan',
      city: 'Moscow',
    },
    {
      name: 'Joe',
      city: 'New York'
    },
    {
      name: 'Johan',
      city: 'Berlin'
    },
  ]

  const groupByCity = (array) => {
    const result = {}

    for (const item of array) {
      const { city, name } = item

      if (!result[city]) {
        result[city] = name
      } else if(Array.isArray(result[city])) {
        result[city].push(name)
      } else {
        result[city] = [result[city], name]
      }
    }

    return result
  }

  console.log(groupByCity(people))
});



// Об'єднання інтервалів у масиві.
(function () {
  const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
  const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
  const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

  function merge(intervals) {
    if (intervals.length < 2) return intervals

    intervals.sort((a, b) => a[0] - b[0])

    let result = [intervals[0]]

    for (let interval of intervals) {
      let recent = result[result.length - 1];

      if (recent[1] >=  interval[0]) {
        recent[1] = Math.max(recent[1], interval[1])
      } else {
        result.push(interval)
      }
    }

    return result
  }

  console.log(merge(array1));
  console.log(merge(array2));
  console.log(merge(array3));
})();



// Перетворення об'єкта.
(function () {
  // Об'єкт на вхід
  const object = {
    a: {
      d: {
        h: 4
      },
      e: 2
    },
    b: 1,
    c: {
      f: {
        g: 3,
        k: {}
      }
    }
  };

  const addLevels = (obj) => {
    const newObj = JSON.parse(JSON.stringify(obj));
    const stack = [{ obj: newObj, level: 0 }];

    while (stack.length > 0) {
      const { obj, level } = stack.pop();

      for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          obj[key].level = level + 1;
          stack.push({ obj: obj[key], level: level + 1 });
        }
      }
    }

    newObj.level = 0

    return newObj
  }

  console.log(addLevels(object));
  console.log(object);

  // Дані на вихід
  /*
  updatedObject {
    a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
    b: 1,
    c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
    level: 0
  }
  */
  // Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }
});



// Напишіть функцію flattenObject(obj), яка приймає як аргумента вкладений об'єкт obj і повертає новий
// об'єкт, в якому всі властивості об'єкта obj "розгладжені" (перетворені в однорівневу структуру), з
// використанням точкової нотації для подання ієрархії властивостей.
(function () {
  const obj = {
    a: {
      b: {
        c: 1,
        d: 2
      },
      e: 3
    },
    f: 4
  };

  const flattenObject = (obj) => {
    const flattened = {};
    const stack = [];

    stack.push({ obj, prefix: '' });

    while (stack.length > 0) {
      const { obj, prefix } = stack.pop();

      for (let key in obj) {
        const value = obj[key];
        const newKey = prefix + key;

        if (typeof value === 'object' && value !== null) {
          stack.push({ obj: value, prefix: newKey + '.' });
        } else {
          flattened[newKey] = value;
        }
      }
    }

    return flattened;
  }

  const flattenedObj = flattenObject(obj);
  console.log(flattenedObj);
  // Результат: { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }
});



// Перевірити, чи є заданий рядок паліндромом. Додамо умову, яка ігноруватиме символи пробілу,
// розділових знаків тощо. Також будемо ігнорувати регістр.
(function () {
  const isEqual = (str1 = '', str2 = '') => {
    return str1.toLowerCase() === str2.toLowerCase()
  }

  const isLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase()
  }

  const isPalindrome = (str = '') => {
    let start = 0
    let end = str.length - 1

    while(start < end) {
      const firstChar = str[start]
      const endChar = str[end]

      if (!isLetter(firstChar)) {
        start += 1;
        continue;
      }

      if (!isLetter(endChar)) {
        end -= 1;
        continue;
      }

      if (!isEqual(firstChar, endChar)) {
        return false
      }

      start += 1
      end -= 1
    }

    return true
  }

  console.log(isPalindrome('Казак'));
  console.log(isPalindrome(`Madam, I'm Adam`));
  console.log(isPalindrome('А в Енисее - синева'));
  console.log(isPalindrome('О, духи, от уборки микробу-то и худо'));
  console.log(isPalindrome('Не палиндром'));
});



// Перетворити рядок на об'єкт, розділяючи властивості по крапці.
(function () {
  const str = 'one.two.three.four.five';
  const arrStr = str.split('.')
  const result = arrStr.reduceRight((acc, val) => {
    return { [val]: acc }
  }, {});

  console.log(result);
});



// Перевірити, чи є задане число простим.
(function () {
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  console.log(isPrime(7)); // true
  console.log(isPrime(12)); // false
  console.log(isPrime(23)); // true
  console.log(isPrime(100)); // false
});



// Обчислити факторіал заданого числа.
(function () {
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  console.log(factorial(5)); // 120
  console.log(factorial(0)); // 1
  console.log(factorial(1)); // 1
  console.log(factorial(10)); // 3628800
})();



// Знайти суму всіх чисел у заданому діапазоні.
(function () {
  function sumRange(start, end) {
    const count = end - start + 1;
    const sum = (count * (start + end)) / 2;

    return sum;
  }

  console.log(sumRange(1, 5)); // 15
  console.log(sumRange(0, 10)); // 55
  console.log(sumRange(-3, 3)); // 0
});



// Реалізувати рекурсивну функцію для обчислення чисел Фібоначчі.
(function () {
  function fibonacci(n, cache = {}) {
    if (n in cache) {
      return cache[n];
    }

    if (n <= 1) {
      return n;
    }

    const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache[n] = result;

    return result;
  }

  console.log(fibonacci(6)); // 8
  console.log(fibonacci(10)); // 55
  console.log(fibonacci(15)); // 610


  // Solving the problem through a loop to avoid stack overflow
  function fibonacci2(n) {
    if (n <= 1) {
      return n;
    }

    let prevPrev = 0;
    let prev = 1;
    let result;

    for (let i = 2; i <= n; i++) {
      result = prevPrev + prev;
      prevPrev = prev;
      prev = result;
    }

    return result;
  }

  console.log(fibonacci2(6)); // 8
  console.log(fibonacci2(10)); // 55
  console.log(fibonacci2(15)); // 610
});



// Розгорнути вкладені масиви за допомогою рекурсії.
(function () {
  function flattenArray(arr) {
    const stack = [...arr];
    const result = [];

    while (stack.length) {
      const element = stack.pop();

      if (Array.isArray(element)) {
        stack.push(...element);
      } else {
        result.unshift(element);
      }
    }

    return result;
  }

  const nestedArray = [1, [2, [3, 4], 5], 6];
  console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]
});



// Реалізувати власні методи map, filter, reduce. Необхідно зберегти всі ті можливості, що
// є у нативних методів: звернення через крапку, отримання всіх необхідних аргументів.
(function () {
  Array.prototype.myFilter = function(callback) {
    const result = []

    for (let index = 0; index < this.length; index++) {
      const isTrue = callback(this[index], index, this)

      if (!isTrue) continue

      result.push(this[index]);
    }

    return result;
  }

  const arrForFilter = [4, 5, 6]
  const arrFilter = arrForFilter.myFilter((item) => item <= 5)

  console.log(arrFilter);

  Array.prototype.myMap = function(callback) {
    const result = []

    for (let index = 0; index < this.length; index++) {
      result.push(callback(this[index], index, this));
    }

    return result;
  }

  const arrForMap = [1, 2, 3]
  const arrMap = arrForMap.myMap((a) => a + 5)

  console.log(arrMap);

  Array.prototype.myReduce = function(callback, initialValue) {
    const isExistInitialValue = initialValue !== undefined
    let result = isExistInitialValue ? initialValue : this[0];

    for (let index = 0; index < this.length; index++) {
      if (!isExistInitialValue && index === 0) continue;
      result = callback(result, this[index], index , this);
    }

    return result;
  }

  const arrForReduce = [1, 2, 3]
  const arrReduce = arrForReduce.myReduce((a, b, index, array) => a + b)
  const arrReduceWithInitial = arrForReduce.myReduce((a, b, index, array) => a + b, 5)

  console.log(arrReduce, arrReduceWithInitial);
});



// Написати власні функції debounce і throttle.
// Debounce очікує певний час перед повторним викликом функції. Throttle обмежує кількість викликів
// функції протягом певного періоду. Гарантує, що функція викликається лише один раз, навіть якщо
// подія запускається кілька разів.
(function () {
  function debounce (callback, time) {
    let timeoutId = null

    return function (...arguments) {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        callback.apply(this, arguments)
      }, time)
    }
  }

  function handleInput(a, b) {
    console.log('Input event debounced', a, b);
  }

  const debouncedInput = debounce(handleInput, 500);

  debouncedInput(1, 2);
  debouncedInput(2, 3);
  debouncedInput(3, 4);

  function throttle(callback, time) {
    let isThrottled = false
    let lastArgs = null
    let lastContext = null

    return function(...arguments) {
      if (isThrottled) {
        lastArgs = arguments
        lastContext = this
        return
      }

      callback.apply(this, arguments)
      isThrottled = true

      setTimeout(() => {
        isThrottled = false
        callback.apply(lastContext, lastArgs)
        lastArgs = null
        lastContext = null
      }, time)
    }
  }

  function handleResize() {
    console.log('Window resized');
  }

  const throttledResize = throttle(handleResize, 500);

  window.addEventListener('resize', throttledResize);
});



// Написати функцію sleep, яка зупиняє виконання коду на певний час.
(function () {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const test = async () => {
    console.log('Начало');
    await sleep(2000); // Приостанавливаем выполнение на 2 секунды
    console.log('Прошло 2 секунды');
  }

  test()
});



// ...
(function () {
  const aob = [
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
  ]

  const superAob = (data, victim) => {
    const obj = {};

    data.forEach((data) => {
      if(data.hasOwnProperty(victim)) {
        if (obj[data[victim]]) {
          obj[data[victim]]++;
        } else {
          obj[data[victim]] = 1;
        }
      }
    })

    let superArrayOfObjects = [];

    for (const key in obj) {
      superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key]}];
    }

    return superArrayOfObjects;
  }

  console.log(superAob(aob, 'framework'));

  // output:-
  // [
  //   { victim: 'React.JS', count: 2 },
  //   { victim: 'Angular', count: 1 },
  //   { victim: 'Vue.JS', count: 1 },
  //   { victim: 'JavaScript', count: 1 }
  // ]
});



// ...
(function () {
  function foo() {
    let x = y = 0;

    x++;
    y++;

    return x;
  }

  console.log(foo(), typeof x, typeof y);
});



// ...
(function () {
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    constructor(width) {
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }

  const square = new Rectangle(20, 30);

  console.log(square.area); // Uncaught SyntaxError: A class may only have one constructor
});



// Event orders
(function () {
  function main(){
    console.log('A');

    setTimeout(
      function print(){ console.log('B'); },0);

    console.log('C');
  }

  main(); // A,C and B
});



// Floating problem
(function () {
  console.log(0.1 + 0.2 === 0.3);
});



// Function arrow context
(function () {
  function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
      // Outer function context
      console.log(this.constructor.name); // User

      return () => {
        // Inner function context
        console.log(this.constructor.name); // User(Get it from the outer context)
        console.log("I'm " + this.name + ", " + this.age + " yrs old");
      };
    }
  }

  let user = new User('John', 25);
  let profile = user.getProfile();

  profile(); //I'm John, 25 yrs old
});



// Function context
(function () {
  function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
      // Outer function context
      console.log(this.constructor.name); // User

      return function() {
        // Inner function context
        console.log(this.constructor.name); // Window
        console.log("I'm " + this.name + ", " + this.age + " yrs old");
      };
    }
  }

  var user = new User('John', 25);
  var profile = user.getProfile();

  profile(); //I'm undefined, undefined yrs old
});



// Function expression
(function () {
  var y = 1;

  if (function f(){}) {
    y += typeof f;
  }

  console.log(y);
});



// Function hoisted
(function () {
  var car = new Vehicle("Honda", "white", "2010", "UK");

  console.log(car);

  function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
  }
});



// Function without new
(function () {
  function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
  }

  var car = Vehicle("Honda", "white", "2010", "UK");

  console.log(car);
});



// Semicolon issue
(function () {
  function foo() {
    return
    {
      message: "Hello World"
    };
  }

  console.log(foo()); // Undefined
});



// ...
(function () {

})();
