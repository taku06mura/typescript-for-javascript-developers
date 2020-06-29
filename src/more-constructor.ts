export {};
class Person {
  constructor(public name: string, protected age: number) {} //constructorによる、メンバー変数の初期化処理。この場合のpublicは省略できない。なぜなら初期化したいから。
  //*重要）アクセス修飾子をconstructorメソッドの引数に書いてあげると自動で初期化処理をしてくれる
}

const me = new Person('たくみ', 31);
console.log(me);