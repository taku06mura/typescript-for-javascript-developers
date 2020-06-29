export {};
//default-parameterとは関数に値が渡されなかった場合、もしくはundefinedが渡された場合、予め決められたデフォルトの引数が適用されるもの。
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => { //第二引数が無かった場合1.1というデフォルト引数が適用される。
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));

