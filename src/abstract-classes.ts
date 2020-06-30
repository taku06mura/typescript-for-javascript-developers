export {};

// 抽象メソッド。signature。必ずオーバーライドしなければならない。その名の通り抽象的なメソッド。
//処理の実態がない。ただこんな名前のメソッドがこのクラスにありますという宣言をしている。

abstract class Animal {
  abstract cry(): string; // メソッドの前にabstractをかくと抽象メソッドになる。抽象メソッドがあるclassを抽象クラスという。
}

class Lion extends Animal { // Animalclassを継承したLionclassを作成。
  cry() { // 抽象メソッドにしておくと実装し忘れた時にエラーを吐いて教えてくれるので便利。
    return 'roar';
  }
}

class Tiger extends Animal { // 抽象クラスを作成したにも関わらず、処理を書き忘れるとエラーを吐いて教えてくれる。
  cry() {
    return 'grrr';
  }
}