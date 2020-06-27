export {};

let numbers: number[] = [1, 2, 3];


let numbers2: Array<number> = [1, 2, 3]; //interface:オリジナルの型number型を持つ配列。<>はジェネリクスといい、型を抽象化する。
let string2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto']; //string型を持つ配列

let string: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [ //二重配列
  [50, 100],
  [150, 300]
];

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan']; // 「 | 」はorの意味。複数の型を並べる共用型。
