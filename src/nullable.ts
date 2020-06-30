export {};

// nullable型
// ある値を設定したいときに必ずしも設定したい値が確定しているとは限らない。
// 例えばある男性の年齢を設定したい時、確かな情報が無くて年齢がわからない時にわからない状態を設定したい時に使える。

let profile: { name: string, age: number | null } = {
  name: 'Taku',
  age: null
  // numberにnullは格納できない。
  // TypeScriptにはコンパイルオプションというものがあり、tsconfig.jsonで設定している。
  // そのtsconfig.jsonの中に"strictNullChecks"というオプションがあり、これがtrueになっていると、nullを代入できない。
  // "strictNullChecks"をtrueからfalseに変えるとどんな変数にもnullを設定できる。
  // この状態をnullableな状態という。
  // この設定はtrueにしておく。
  // このような場合は、union型を使い局所的に対応する。
};


