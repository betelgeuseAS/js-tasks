// Завдання: порядок виконання.
(function () {
  function main(){
    console.log('A');

    setTimeout(function print() {
      console.log('B');
    }, 0);

    console.log('C');
  }

  main();

  /*
    1. A
    2. C
    3. B
  */
});



// Завдання: порядок виконання.
(function () {
  console.log(1);

  setTimeout(() => console.log(2));

  Promise.resolve().then(() => console.log(3));
  Promise.resolve().then(() => setTimeout(() => console.log(4)));
  Promise.resolve().then(() => console.log(5));

  setTimeout(() => console.log(6));

  console.log(7);

  /*
    1. 1
    2. 7
    3. 3
    4. 5
    5. 2
    6. 6
    7. 4
  */
});



// Завдання: порядок виконання.
(function () {
  setTimeout(() => console.log("Timeout"), 0);

  console.log(1);

  new Promise(resolve => {
    console.log("New promise");
    setTimeout(() => {
      console.log("Timeout3");
      resolve();
    }, 0);
  }).then(() => {
    console.log("Then1");
  }).then(() => {
    console.log("Then2");
  });

  console.log(4);

  setTimeout(() => console.log("Timeout2"), 0);

  /*
    1. 1
    2. New promise
    3. 4
    4. Timeout
    5. Timeout3
    6. Then1
    7. Then2
    8. Timeout2
  */
});



// Завдання: порядок виконання.
(function () {
  console.log("Start");

  setTimeout(function() {
    console.log("Timeout1");
    Promise.resolve().then(() => {
      console.log("Promise timeout");
    });
  }, 0);

  setTimeout(() => {
    console.log("Timeout2");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise1");
  });

  Promise.resolve().then(() => {
    console.log("Promise2");
  });

  console.log("End");

  /*
    1. Start
    2. End
    3. Promise1
    4. Promise2
    5. Timeout1
    6. Promise timeout
    7. Timeout2
  */
});



// Завдання: порядок виконання.
(function () {
  console.log("Script start");

  setTimeout(function() {
    console.log("Timeout");
  }, 0);

  Promise
    .resolve()
    .then(function() {
      console.log("Promise1");
    })
    .then(function() {
      console.log("Promise2");
    });

  console.log("Script end");

  /*
    1. Script start
    2. Script end
    3. Promise1
    4. Promise2
    5. Timeout
  */
});



// Завдання: порядок виконання.
(function () {
  setTimeout(() => {
    console.log("Timeout");
  }, 0);
  
  const promise1 = new Promise((resolve, reject) => { // new Promise - синхронна операція
    console.log("Promise1 creation");
    resolve();
  });
  
  const promise2 = new Promise((resolve, reject) => {
    console.log("Promise2 creation");
  });
  
  promise1.then(() => { // promise then - асинхронна операція
    console.log("Promise1 resolving");
  });
  
  console.log("End");
  console.log("Promise2: ", promise2);

  /*
    1. Promise1 creation
    2. Promise2 creation
    3. End
    4. Promise2:  Promise {}
    6. Promise1 resolving
    7. Timeout
  */
});



// Завдання: порядок виконання.
(function () {
  function myFunction() {
    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 1000);
    setTimeout(() => {
      console.log(3);
    }, 0);
    Promise.resolve()
      .then(() => console.log(4))
      .then(() => console.log(5));
    console.log(6);
  }

  myFunction();
  setTimeout(() => {
    console.log(7);
  }, 100);

  // 1 6 4 5 3 7 2
})();



// ...
(function () {

})();
