export {};

// assertion型
// 例えば型がany型だった場合、any型は制約がない状態になるので制約をかけたい。もし扱っているデータがstring型だった場合
// any型からstring型に変換できる。ただ変換すると言っても、互換性があることが前提なので、string型からnumber型への変換はできない。

let name: any = 'Takumi';

let length = (name as string).length;
// let length = (<string>name).length; // こちらのアサーションはReactのjsxの記法と似ているので推奨されていない。

// length = 'foo';

