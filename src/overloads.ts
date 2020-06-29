export {};

function double(value: number): number; //signatureは引数とreturnの型だけ定義
function double(value: string): string; //signatureは関数実態の前に書く。これからこういった関数を使いますよという宣言。

function double(value: any): any {//関数の実態は一つしか書けない。アドテーションは全ての型を受け取れるようにany型にする。ただ、signatureで宣言していない型ははじいてくれる。
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else { //number以外のデータが渡ってきた場合、signatureで定義しているため絶対にstring型であるためnumber,string以外の処理は不要。
    return value + value;
  }
}
//doubleという関数が重複している為エラーが起きる。これを解消するためにoverloadを使う。
//overloadにはsignatureという宣言が必要。これは関数処理の実態は書かずに、関数、引数、戻り値の型のみの宣言をしたもの。関数の概略のようなもの。
//概略とはいえsignatureによって型制約が実現できるので便利。
//上の関数と下の関数は違うもの。具体的には引数の型、returnに戻すデータの型が違う。
//上の関数と下の関数それぞれ専用のsignatureを描いてあげる。

// function double(value: string): string {
//   return value + value;
// }
console.log(double(100));
console.log(double('Go '));
// console.log(double(true));