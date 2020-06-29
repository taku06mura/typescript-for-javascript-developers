export {};
//rest-parameterとは引数が幾つになるか分からない時に使うと、引数が全て受けてってくれる。

const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
}

console.log(sum(1, 2, 3, 4, 5));
//まず1と2が渡され足される。次に足された値3と3が渡され足される.
//次に足された値6と4が渡され足される。次に足された値10と5が渡され足される。
//最後に足された値15が出力される。
// [1, 2 , 3, 4, 5].reduce(reducer) //reduceはメソッド。reducerは足し算をしてくれる関数。
