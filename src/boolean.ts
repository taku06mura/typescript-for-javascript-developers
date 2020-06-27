export {}; //モジュール化(importやexport)していないファイル内で他のファイルで使用されている変数や定数名を使用すると、スコープの関係でエラーになるため、export{};と書いてエラーを回避する

let name = 'TypeScript';
//プリミティブ型は型の総称
let isFinished: boolean = true; //boolean型はtrueかfalseしかもたない。:で型注釈する。この変数はこのような意図とコンパイラに伝える。型注釈やアドテーションという。
isFinished = false;
//isFinished = 1; //整数はboolean型ではないためエラーになる
console.log({isFinished});
