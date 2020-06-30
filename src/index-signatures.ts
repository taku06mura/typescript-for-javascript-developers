export {};

// let profile: {name?: string} = {};
 // 初期化時にはnameが決まっていないのでオプショナルなプロパティにするために?をつける。
 // しかしプロパティが増えた時にしらみつぶしにオプショナルなパラメーターとして型のプロパティを増やすのは好ましくない。
 // こんな時に使えるのがindex-signature。
 // index-signatureはその名の通りオブジェクトのインデックス、つまりキーに該当する箇所をアドテーションするための署名のこと。
 // 下記のように書く。How to write index signatures
 // { [ index: typeForIndex ]: typeForValue }

interface Profile { // interfaceでProfileという型を作成
  name: string;
  underTwenty: boolean; // 20歳未満かどうかのプロパティを追加trueの場合は未成年
  [index: string]: string | number | boolean; // stringとnumberしか許容できないのでbooleanを追加
}

let profile: Profile = { name: 'Taku', underTwenty: false };
// underTwentyは必須のプロパティになるので初期化時に指定する。
// ついでにnameも。

profile.name = 'Taku';
profile.age = 31;
profile.nationality = 'Japan';

