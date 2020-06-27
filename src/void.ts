export {};

function returnNothing(): void { //関数からのreturn値が無い場合にvoid型を使う。基本的には関数のreturn値に対してアドテーションする。
  console.log("I don't return anything!");
}

console.log(returnNothing());