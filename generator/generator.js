function* generatorFun() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generatorFun();
console.log(...generator);
