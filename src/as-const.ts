export {};

let name = 'Takumi';

name = 'Taku'

let nickname = 'Taku' as const;
nickname = 'Taku' // 再代入はできるが、'Taku'という文字列以外再代入できなくなる。実質定数になる。

let profile = {
  name: 'Takumi',
  height: 179
} as const;
 // 通常オブジェクトは再代入できるが、as constとすると再代入できなくなる。readonlyの属性になる。
 // 値を変えたくない場合、それぞれの値にreadonlyと書くのではなく、as constを使う方が便利。
 // 全てのプロパティがreadonlyになる。
 // しかもどれだけオブジェクトの中身がネストされていても全ての要素がreadonlyになる。

// profile.name = 'Taku'; as constでreadonlyになっているのでエラーになる。
// profile.height = 179;