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



// ...
(function () {

})();
