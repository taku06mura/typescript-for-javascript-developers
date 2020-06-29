export {};
// 同じ名前のclassは存在できない。そこでnamespaceという空間を作って入れる。

namespace Japanese {
  export namespace Tokyo { // namespaceを同じクラス内で複数使うこともできる。
    export class Person { // exportと書いてnamespaceの外から呼び出されるようにしてあげる。
      constructor(public name: string) {
      }
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {
      }
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('たくみ');
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person('たくみん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);