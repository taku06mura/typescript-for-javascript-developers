export {};
//クラスの作り方。classを書いてスペースを開けてクラス名を先頭の文字だけ大文字で書き、スペースを書き{}を書く。
//クラスはインスタンスを作るためのものなので最後の;は書かない。

class Person {
  public name: string; //メンバー変数名にもアドテーション。アクセス修飾子publicを書くとnameはアクセス可能になる。publicは書いても書かなくても同じ。publicは書かないことが一般的。
  //private age: number; //メンバー変数名にもアドテーション。アクセス修飾子privateを書くとメンバー変数名ageはアクセス不可になる。何も書かないとアクセス可能。
  protected age: number;
  protected nationality: string; //nationality:国籍。protectedはprivateと違い、子クラスで呼び出すことができる。privateは自クラスでしか呼び出せない。

  constructor(name: string, age: number, nationality: string) { //constructorメソッドはインスタンスを作る際に自動的に呼び出され、もろもろの初期化処理をしてくれる。引数はインスタンスを作成する時の引数が渡ってくる。
  //constructorはリターンしないので、型は書かない。言語仕様として決まっている。引数には必要。
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile (): string { // profileメソッド。文字列を返す。profileは関数なので()を書く。
    return`name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person { // Personクラスを継承した子クラスAndroidクラス。extendsは継承の意味。
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality) // superメソッドを使うと、親クラスのメソッド、この場合constructorメソッド呼び出すことができる。親クラスのconstructorメソッドで初期化される。
  }
  profile(): string {
    return`name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;

  }
}

let taro = new Person('Taro', 30, 'Japan'); //() の中には実引数。インスタンス名taro
console.log(taro.profile()); // ここで呼び出しているのはインスタンスではなく、関数profileなのでprivateのageも呼び出せる。呼び出せないのはあくまでPerson classのインスタンスからだけ。
console.log(taro.name);
// console.log(taro.age); //class Personの定義で、アクセス修飾子privateを書いているので呼び出せなくなりエラーになる。
// あくまでPerson classのインスタンスから呼び出せなくなっただけ。Person classの内部の処理は可能${this.age}。
// let hanako = new Person();
