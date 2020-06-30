export {};

let fooCompatible: any; // any型はstring型を代入されるとstring型になる。
let barCompatible: string = 'TypeScript';
// any型はstring型と互換性があるので代入できる。

console.log(typeof fooCompatible); // undefinedで出力される。

fooCompatible = barCompatible;

console.log(typeof fooCompatible); // stringで出力される。

let fooInCompatible: string;
let barInCompatible: number = 1;
// fooInCompatibleはstring型なのでnumber型のbarInCompatibleは代入できない。これを互換性が無いという。
// fooInCompatible = barInCompatible; // 互換性が無いので代入できない。

let fooString: string;
let barString: string = 'string';

fooString = barString; // 互換性があるので代入できる。

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // 文字列リテラル型は文字列型の一部なので代入できる。

let fooNumber: number;
let fooNumberLiteral: 1988 = 1988;
fooNumber = fooNumberLiteral; // fooNumberは数値全体を許容するので、numberLiteral型は代入できる。

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal; //Animal型というアドテーション。Personクラスを用いてインスタンスを生成。
me = new Person(31, 'Takumi');
// PersonクラスとAnimalクラスは関係性はない。
// PersonクラスはAnimalというinterfaceがなくても実装できる。
// つまりオブジェクトを代入できるかどうかの判定はそのオブジェクトの型は関係ない。
// 代入される側の型にあるメンバーは、代入するデータにも存在していなければならない。
// オブジェクト間の代入の場合にも型の互換性の有無が必ず評価される。
// オブジェクト間の型の互換性の評価では各々の型が一致しているかどうかは関係ない。
// 代入されるオブジェクトの内部で持つメンバーが代入するオブジェクトの方にも存在するか、
// そしてそのメンバーの型に互換性があるかどうかを評価する。
// この時、クラスの継承関係や、interfaceを実装しているかどうかは関係ない。
// これを構造的部分型という。