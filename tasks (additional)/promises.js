// Написати власний promise all (Навіть збережений порядок).
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
  Promise
    .reject("a")
    .catch(p => p + "b")
    .catch(p => p + "c")
    .then(p => p + "d")
    .finally(p => p + "e")
    .then(p => console.log(p)); // abd

  Promise
    .reject("a")
    .then(p => p + "1", p => p + "2")
    .catch(p => p + "b")
    .catch(p => p + "c")
    .then(p => p + "d1")
    .then("d2")
    .then(p => p  + "d3")
    .finally(p => p + "e")
    .then(p => console.log(p)); // a2d1d3

  Promise
    .resolve(1)
    .then(x => x + 1)
    .then(x => { throw x; })
    .catch(err => console.log(err)) // 2
    .then(x => Promise.resolve(1))
    .catch(err => console.log(err))
    .then(x => console.log(x));  // 1
});



// ...
(function () {

})();
