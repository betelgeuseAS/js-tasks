// The order of execution.
(function () {
  function main(){
    console.log('A');

    setTimeout(
      function print(){ console.log('B'); },0);

    console.log('C');
  }

  main();

  /*
    Order:
    1. A
    2. C
    3. B
  */
});



// The order of execution.
(function () {
  console.log(1);

  setTimeout(() => console.log(2));

  Promise.resolve().then(() => console.log(3));
  Promise.resolve().then(() => setTimeout(() => console.log(4)));
  Promise.resolve().then(() => console.log(5));

  setTimeout(() => console.log(6));

  console.log(7);

  /*
    Order:
    1. 1
    2. 7
    3. 3
    4. 5
    5. 2
    6. 6
    7. 4
  */
})();



// The order of execution.
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
    Order:
    1. 1
    2. New promise
    3. 4
    4. Timeout
    5. Timeout3
    6. Then1
    7. Then2
    8. Timeout2
  */
})();



// ...
(function () {

})();
