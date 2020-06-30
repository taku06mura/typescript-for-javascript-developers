export {};

const kansu = (): number => 31;

let numberany: any = kansu();
let numberUnknown: unknown = kansu();

let sumany = numberany + 10;
// let sumUnknown = numberUnknown + 10; //unknownは不明なので演算できないのでエラーになる
if (typeof numberUnknown === 'number') { //typepfは型を取得。取得した型の値が文字列'number'だった場合演算は実行される。
  let sumUnknown = numberUnknown + 10;
   //8行目の演算ではエラーになっていたが、if文を使っている為実行される。
   // このようにtypeofを使ってある特定の型であることを確認し、コードを安全に実行する仕組みをtypeガードという。
   // 具体的に型を指定することが理想だが、型がその段階でわからない時などに限定的に使用する。
}