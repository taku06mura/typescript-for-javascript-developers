export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean //?をつける
): number => {
  const bmi: number = weight / (height * height);

  if (printable) { //trueの場合のみ出力される
    console.log({bmi});
  }
  return bmi;
};
bmi(1.79, 75, true); //true以外出力されない


//bmi(身長, 体重, console.log で出力するかどうか？)
//bmi(1.79, 75, true);
//bmi(1.79, 75, false);
//bmi(1.79, 75);