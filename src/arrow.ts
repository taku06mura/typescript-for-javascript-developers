export {};
let bmi: (height: number, weight: number) => number = ( //bmiに対してアドテーション
  height: number,//引数に対してアドテーション
  weight: number //引数に対してアドテーション
// ): number => {
//   return weight / (height * height); //関数の処理が1行しかない場合returnと{}を消して以下のように書ける。
// };
): number => weight / (height * height);

console.log(bmi(1.79, 75));