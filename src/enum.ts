export {};

enum Months { //enum型(列挙型)はオブジェクトの要素に番号を0から自動的に付与してくれる。JavaScriptではキーとバリューで書かなければならない。
  January = 1, //数値のenum型はオーバーライドしてあげれば他の要素の番号も自動的に変えてくれる。
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  Novnmber,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthsJs = { //JavaScriptの場合
//   January: 0,
//   February: 1
// };

// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS { //文字列のenum型
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '000000'
}

let green = COLORS.GREEN;
console.log({green});

enum COLORS {
  YELLOW = '#FFFF00' //後から追加できる。
}

// COLORS.YELLOW; //存在しないのでエラーになる。