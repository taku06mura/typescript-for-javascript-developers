import axios from 'axios';

export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) { //コールバック関数。urlにgetリクエストを送信。この場合はホストは指定されていない。こういう場合のホストはデプロイしたサーバーのホストになる。 axios.githubより//let data: any;//外部APIから返ってくるレスポンスなのでTypeScriptにとって型推論できない謎の型
  interface Article { //interfaceを使用したオリジナルのArticle
    id: number;
    title: string;
    description: string;
  }
  // let data: any; //any型は限定的に使うだけにする。その時点で、アドテーションが難しい場合など。エラーがうまく吐き出せなくなる為。any型に依存せずにできるだけ型を指定する。
  let data: Article[]; //漠然とオブジェクトだけど中身がよくわからないという型ではなく、id, title, descriptionという要素を持つオブジェクト。
  data = response.data
  console.log(data);
});