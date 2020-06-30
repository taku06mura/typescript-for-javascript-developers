export {};

// jenericsとは汎用的なの意味。jeneric薬品(ブランド物ではないが成分は一緒)と同じ単語。

// const echo = (arg: number): number => {
//   return arg;
// };

// // 方が異なるだけでやっていることが同じような関数を共通化したい。そんな時jenericsが使える。

// const echo = (arg: string): string => {
//   return arg;
// }

const echo = <T>(arg: T): T => { // <T>がjenericsの宣言。抽象的な型。慣習としてTがよく使われる。型引数と呼ばれる。この時点では何の型かはわからないが、引数の型と戻り値の型が一致している。
  return arg;
}

console.log(echo<number>(100)); //ここで何の型か教えてあげる。
console.log(echo<string>('Hello!')); // このように抽象的な関数をjenericsで作ってしまえば、型を指定するだけで
console.log(echo<boolean>(true)); // いくらでも関数を作れてしまうので、関数を作るコストが下げられる。

// class Mirror {
//   constructor(public value: number) {} // number型で初期化。

//   echo(): number {
//     return this.value;
//   }
// }

class Mirror<T> {
  constructor(public value: T) {} // 上記のようなnumber型で特定すのではなく、jenerics型を用いて抽象的にすると汎用性が増す。

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo()); // number型で出力。
console.log(new Mirror<string>('Hello, generics!').echo()); // string型で出力。
console.log(new Mirror<boolean>(true).echo()); // boolean型で出力。