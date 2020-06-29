export {};

// 静的メンバーについて。classはclassから、newを実行する時に引数を与えconstructorで初期化させ、インスタンスを作成し。インスタンスからアクセスできるメンバーをプロパティを使って属性を参照する。
// これらのインスタンスは具体的なオブジェクトを生成することでそれぞれまちまちなメンバーを持たせることができる。こういったメンバーのことを動的メンバーという
// これに対して常に変化しないメンバーを持たせたいときや、わざわざnewでインスタンスを生成せずメンバーにアクセスしたいときがある。そんな時に便利なのが静的メンバー

class Me {
  // isProgrammer: boolean = true; //動的メンバ
  // firstName: string = 'Takumi';
  // lastName: string = 'Muramatsu';
  static isProgrammer: boolean = true; //静的メンバ staticと書くことでインスタンスを作らなくてもアクセス可能になる。
  static firstName: string = 'Takumi';
  static lastName: string = 'Muramatsu';

  static work() { // workメソッドを作成。
    // return "Hey guys! This is Takumi! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
    // 上記でクラス指定で${Me.firstName}と書くことも可能だが仮にYouというクラスを作った時に流用性が悪いので、thisとする。
  }
}

// let me = new Me(); //動的
// console.log(me.isProgrammer);

console.log(Me.isProgrammer); // 静的 インスタンスを作成しなくてもアクセス可。
console.log(Me.work());
