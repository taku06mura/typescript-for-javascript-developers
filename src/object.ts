export {};

let profile1: object = { name: 'Ham' }; //やり方その１。制約が甘いのがデメリット
profile1 = { birthYear: 1988 }; //name属性ではなくても再代入できる。

let profile2: { //やり方その2。プロパティにもアドテーションできる。制約が厳しい。型宣言はできるだけ制約が強くなるように定義するのが理想。想定外のデータの混入を防ぐ為。
} = { name: 'Ham' };
//profile2 = { birthYear: 1988 };//birthYearという属性には対応していないのでエラーになる。
profile2 = { name: 'Nimo'}; //name属性には再代入できる。プロパティの値の更新はできる。