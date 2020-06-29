export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない
//   * 参照できる
// * secretNumbet
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

class MyNumberCard {
  private _owner: string; // ownerメソッドと競合してしまったので、メンバー変数を被らないように_ownerにリネイム。リネイムする時は慣習的に_をつけてリネイムする。
  private _secretNumber: number; // 参照できないようにする為privateを設定。setterのsecretNumberメソッドと競合してしまったのでメンバー変数を被らないように_secretNumberにリネイム。

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() { // ownerメソッドを定義。getをつけてprivateで見れないownerを参照するためのメソッド。参照する為のメソッドを一般的にgetterという。
    return this._owner;
  }

  set secretNumber(secretNumber: number) { // setterは値を設定する時にのみ実行されるメソッド。
    this._secretNumber = secretNumber;
  }
  debugPrint() { // デバッグ用のメソッド。secretnumberの中身見る為。
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('たくみ', 1234567890);

// card.owner = 'takumi'; // アクセサーには参照できるようにするためのgetメソッド(参照専用)と、書き換え、設定等をできるようにするためのsetメソッドがある。
console.log(card.debugPrint()); // card番号を出力。
card.secretNumber = 1111111111; // card番号を変更。
console.log(card.debugPrint());

console.log(card.owner);
// card.secretNumber;
// card._secretNumber
console.log(card.secretNumber); //これでは参照できずundefinedとなる。