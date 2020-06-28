export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  //throwingSpeed: 154, //batter1の型にthrowingSpeedという要素は無いのでエラーになる。
  battingAverage: 0.367
};

// type TwoWayPlayer = { //下記のように書ける。
//   throwingSpeed: number;
//   attingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;
//このようにintersection型を使えば、既存の型を組み合わせて新たな型を定義できる。コードの中でintersectionという単語を使う必要はない。
//オブジェクトの属性を足していく。必須の習慣。
//既存の型を使うことでメンテナンス性能が上がる。

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
