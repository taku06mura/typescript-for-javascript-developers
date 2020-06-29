export {};

function bmi(height: number, weight: number): number { //引数に対してアドテーションし、返り値に対してもアドテーションする。
  return weight / (height * weight);
}

console.log(bmi(1.79, 75));