export {};

type Mojiretsu = string; //新しい型Mojiretsuを作成。
const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 31
};

type Profile = { //新しい型Profile型を定義。
  name: string;
  age: number;
};


const example2: Profile = { //定義したProfile型を使用できる。
  name: 'Ham',
  age: 31
};

type Profile2 = typeof example1;
 //新しい型Profile2にtypeofというキーワードを使ってexample1の型を取り出し定義。
 //このやり方は間違いが発生しにくい。かつ、example1の構造が変わっても変更内容を追従してくれる。非常に便利。