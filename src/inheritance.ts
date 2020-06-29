export {};

// 継承とは:既存のクラスを拡張して新たなクラスを生成すること。

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal { // extendsを使ってAnimalクラスを継承したLionクラスを生成。
  public speed: number;

  constructor(name: string, speed: number) {
    super(name); //superメソッドを使うと、親クラスのメソッド、この場合constructorメソッド呼び出すことができる。親クラスのconstructorメソッドで初期化される。
    //nameの初期化処理は親クラスでやっれくれる。speedの初期化処理は子クラスでやる。
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h`; //superで親クラスのrunメソッドを実行してくれる。
  }
}

// let animal = new Animal(); // インスタンスを生成
// console.log(animal.run());

// let lion = new Lion(); // インスタンスを生成
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());