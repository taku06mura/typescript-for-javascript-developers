export {};

function error(message: string): never { //呼び元に戻っってこない関数の場合。受け取った文字列をエラーのメッセージとしてエラーを発せさせる関数。
  throw new Error(message);
}

try {  //エラーハンドリングcathでエラーを拾って、プログラムを継続
  error('test')
} catch {
  console.log({error});
}

let foo: void = undefined;
let bar: never = error('only me'); //errorの関数はnever型を返す関数と定義


//void型と、never型の違い
//void型はリターンされる値がないことを前提。つまり、必ず返ってくる。それに対して、never型は返ってこないことを前提。つまり値もクソもない。