export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface { //エイリアスではないので=は不要。Interfaceという構文でもオブジェクト型に名前をつけることができる。それを適宜必要な場面でアドテーションとして利用できる。他にもクラスを使う際にも使える。
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Hamsan',
  age: 31
};