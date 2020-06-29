export {};

let bmi: (height: number, weight: number) => number = function ( //bmiに対してアドテーション
  height: number, //引数に対してアドテーション
  weight: number
  ): number { //返り値に対してアドテーション
  return weight / (height * height); //処理
};

console.log(bmi(1.78, 75));