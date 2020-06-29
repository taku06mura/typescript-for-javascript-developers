export {};
//クラスの作り方。classを書いてスペースを開けてクラス名を先頭の文字だけ大文字で書き、スペースを書き{}を書く。
//クラスはインスタンスを作るためのものなので最後の;は書かない。

class Person {
  name: string; //アドテーション
  age: number; //アドテーション

  constructor(name: string, age: number) { //constructorメソッドはインスタンスを作る際に自動的に呼び出され、もろもろの初期化処理をしてくれる。引数はインスタンスを作成する時の引数が渡ってくる。
  //constructorはリターンしないので、型は書かない。言語仕様として決まっている。引数には必要。
    this.name = name;
    this.age = age;
  }

  profile (): string { //profileメソッド。文字列を返す。profileは関数なので()を書く。
    return`name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30); //()の中には実引数。
console.log(taro.profile());
// let hanako = new Person();
