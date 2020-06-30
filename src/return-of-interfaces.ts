export {};


class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}
// TypeScriptでは複数のクラスの継承、つまり多重継承は許されていない。しかし、複数箇所に分散された機能を集約して使い時がある。そんな時に使えるのがinterface。
// interfaceはオブジェクトの型として定義できるものだが、この機能以外にもinterfaceには全てのメソッドが抽象メソッドのような特徴があり、複数同時に継承のようなことができる。厳密に言うと継承ではなく実装。

interface Kenja { // 処理の実態がわからない。これらをシグネチャーという。
  ionazun(): void; // 関数からのreturn値が無い場合にvoid型を使う。基本的には関数のreturn値に対してアドテーションする。
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi { // implementは実装という意味。implementsを使うと実装忘れがなくなるつまり実行中のエラーがなくなる
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
