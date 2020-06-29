export {};
// readonly修飾子は読み取り専用のものにする時に使う。

class VisaCard {
  // readonly owner: string; // メンバーの前にreadonlyをつけるだけ
  // constructor(owner: string) {
  //   this.owner = owner;
  // }
  // 下記のように簡潔に書くことができる。

  constructor(public readonly owner: string) { }
  // readonlyはreadできることが前提。つまりprivateでもprotectedでもないので絶対publicである。
  // なのでpublicは書かなくても良いが、わかり図楽なるので書いておいた方が良い。
  // あと、publicを書かなくていいのはreadonlyの時だけ。後にreadonlyを取り除きたくなり取り除いた時に
  // publicが無いとエラーになってしまうので書いておいた方が良い。
}

let myVisaCard = new VisaCard('たくみ');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';