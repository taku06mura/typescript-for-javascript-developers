export {};

// let dayOfTheWeek: string = '日'; 文字列のアドテーション。dayOfTheWeek = '11'; のような想定外の文字列の値が設定される可能性がある。
let dayOfTheWeek: '日' | '月'| '火' | '水' | '木' | '金' | '土' = '日'; //文字列の曜日指定のアドテーション。これを文字列のiteral型という。
dayOfTheWeek = '月';
//dayOfTheWeek = '目'; エラーになる。

let month: 1| 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12= 1; //数値のリテラル型。
month = 12;
// month = 13; エラーになる。

let TRUE: true = true; //booleanのliteral型。実用性はないけど。
//TRUE = false; //エラーになる。
