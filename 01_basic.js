// ブラウザ・Node.jsなどは実行環境と呼ぶ。実行環境で定義されるオブジェクトなどもあり、仕様が異なる。
// JavaScriptは大部分がオブジェクトであり、オブジェクト同士のコミュニケーションによって成り立っている。

// JavaScriptは大文字と小文字を区別する。
const name = "azu";
const NAME = "AZU";

// セミコロンは文末に付けなくても自動で挿入される。しかし暗黙的なルールに頼ると良くないのでセミコロンは常に書く。
1 + 1;

// strict modeにすると、レガシーで良くない機能や構文、問題を含むコードをエラーにしてくれる。例えば、constなどのキーワードなしに変数定義をしようとするなど。
// ES モジュールのコードは最初から厳格モードなので、自動で有効になることが多い。
// ファイルをESモジュールにするには、<script>にtype="module"を指定する。
("use strict");
mistypedVariable = "error"; // ReferenceError

// constは再代入できない変数の宣言とその初期値の定義をする。
// 再代入しようとしたらエラーになる。
const 変数名 = 初期値;
const bookTitle = "JavaScript Primer";

// letは再代入可能な変数を定義する。
let friendName = "Ai";
friendName = "Kuu";

// letで変数だけ定義もできる。
let areaName;
areaName = "Tokyo";

// varも再代入可能な変数を定義するが、既存と同じ名前の変数を定義できてしまう（上書きされる。letやconstはエラーで防いでくれる）
// その他挙動も好ましいくないものがあるため、varは避けて良い。
// varは後方互換性のために残っているだけ。

// 変数名のルール: 半角アルファベットと_と$と数字を使える。
// letやconstなどの予約後は変数名に指定できない。
// 数値を冒頭に指定できないのは、数値リテラルとの衝突を避けるため。
let $; // OK: $が利用できる
let _title; // OK: _が利用できる
let jquery; // OK: 小文字のアルファベットが利用できる
let TITLE; // OK: 大文字のアルファベットが利用できる
let es2015; // OK: 数字は先頭以外なら利用できる
let 日本語の変数名; // OK: 一部の漢字や日本語も利用できる

// constは定数ではない。再代入できない変数にとどまる。
// オブジェクト以外の値（プリミティブ）で初期化したら、実質的に定数になるが、constでオブジェクトを定義したらそのオブジェクトは変更できる。
const object = {
  key: "値",
};

// 同じ名前で新しいオブジェクトを作ろうとしたらエラーになる。
// const object = {
//   key: "同名オブジェクトの値",
// };

// このように、オブジェクトのプロパティの値は更新できる。
object.key = "新しい値";

// ブラウザやNode.jsなど多くの実行環境には、コードを評価してその結果を表示する機能がある。ブラウザの場合は開発者ツールのWebコンソール
// エラーに構文エラーと実行時エラーがある。構文エラーは文字通りコードの書き方が間違っており、実行時エラーはAPIのデータ型など実行してみないとわからないエラー

// データ型について
// JavaScriptは動的型付け言語なので、静的型付け言語のように変数の型はない。それはTypeScriptがやっている。
// しかし、文字列、数値、真偽値といった値の型は存在する。
// 型の種類は、オブジェクト型とプリミティブ型がある。
// typeof演算子を使うと、値のデータ型を取得できる。

// オブジェクト型（複合型）は、名前の通りオブジェクト。プリミティブ型以外の型とも言える。
// nullはオブジェクト。これは歴史的経緯のある仕様のバグらしい。
console.log(typeof { key: "value" }); // => "object"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"

// プリミティブ型（基本型）は、文字列、数値、真偽値、null、undefined、シンボルがある。
console.log(typeof true); // => "boolean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof "JavaScript"); // => "string"
console.log(typeof Symbol("シンボル")); // => "symbol"

// リテラルとは: データ型の値をコードに直接記述する方法。値そのもののこと
// 数値リテラルは、1_000_000_000_000のように区切り文字を使える。見間違いが減ってわかりやすい。評価の際は_は無視される。

// "（ダブルクォート）と'（シングルクォート）はまったく同じ意味
// 改行は\nを使う。
("複数行の\n文字列を\n入れたい");

// `で囲むと、テンプレートリテラルになる。改行をそのまま扱ってくれるし、変数も中で使える。
// ずっと``で良いじゃんと思ったが、ただの文字列であることは"や'の方が伝わりやすかったり、JSONでは""しか使えなかったりするので適材適所。
`
複数行の
文字列を
入れたい
`;

const greeting = "こんちは";
`和平、${greeting}`;

// nullリテラル
// nullは、定義はされているが「何もない」という値を示す。値が定義されていないundefinedとは異なる。

// objectリテラル
// objectリテラルは、オブジェクトの作成と同時に中身の定義もできる。中身は、keyとvalueがセット。
const obj = {}; // 中身が空のオブジェクトを作成
const obj2 = {
  key: "value",
  animalType: "dog",
};
// キーは、引用符無しでもありでも基本的に同じ結果になる。しかし、スペースやハイフンが入ったり数字から始まる場合は引用符が必要
// 基本は引用符なしでかいて、必要になったら引用符を使えばOK
const obj2Another = {
  key: "value",
  animalType: "dog",
};

// オブジェクトの中身を参照するには、キーを指定する。方法は2つ。ドット記法とブラケット記法
const obj3 = {
  name: "koizumi",
};
// ドット記法
console.log(obj3.name);
// ブラケット記法
console.log(obj["name"]);

// ブラケット記法では、プロパティ名に変数も利用できる。
const languages = {
  ja: "日本語",
  en: "英語",
};
const myLang = "ja";
console.log(languages[myLang]); // => "日本語"

// 基本的には簡潔なドット記法を使い、プロパティ名に変数を入れたい時にブラケット記法を使うのでOK。

// 演算子について

// 厳密等価演算子（===）は、左右の2つのオペランドを比較して同じ方で同じ値である場合にtrueを返す
console.log(1 === 1); // => true
console.log(1 === "1"); // => false

// 厳密不等価演算子（!==）は、左右の2つのオペランドを比較して一致しない場合にtrueを返す
console.log(1 !== 1); // => false
console.log(1 !== "1"); // => true
console.log(1 !== 2); // => true

// 等価演算子（==）は使うべきでない。結果を予測しずらい

// 分割代入を使うと、配列やオブジェクトの値を複数の変数へ同時に代入できる
const array1 = [1, 2, 3];

const [a, b, c] = array1;
console.log(a); // => 1
console.log(b); // => 2
console.log(c); // => 3

// オブジェクトは、左辺の変数名に対応する右辺のキーの値を代入する
const obj4 = {
  key: "value",
  dog: "cute",
};
// プロパティ名`key`の値を、変数`key`として定義する
const { key, dog } = obj4;
console.log(key); // => "value"
console.log(dog); // => "cute"

// 論理演算子
// &&（AND）,||（OR）,!（NOT）がある。

// 三項演算子
// 条件式 ? Trueのとき処理する式 : Falseのとき処理する式;

// 値→真偽値
// 以下のような値は、falseに変換される。逆に、それ以外はtrue。
// falsyな値とも言う。
false;
undefined;
null;
0;
0n;
NaN;
(""); //（空文字列）

// 型を変換する関数
// 例えばユーザから数字を受け取るとき、ユーザ入力は文字列でしか受け取れないため、文字列から数値に変換する。数値にできない文字列がきたらNaNになる。
// ユーザー入力を文字列として受け取る
const input = window.prompt("数字を入力してください", "42");
// 文字列を数値に変換する
const num = Number(input);

// 真偽値を得るためには、関数を作ると便利なことが多い
// 空文字列かどうかを判定
function isEmptyString(str) {
  // String型でlengthが0の値の場合はtrueを返す（string型 かつ 文字長が0文字。）
  return typeof str === "string" && str.length === 0;
}

// 関数について

// 関数の4要素
// 1. 関数名 - 利用できる名前は変数名と同じ（「変数名に使える名前のルール」を参照）
// 2. 仮引数 - 関数の呼び出し時に渡された値が入る変数。複数ある場合は,（カンマ）で区切る
// 3. 関数の中身 - {と}で囲んだ関数の処理を書く場所
// 4. 関数の返り値 - 関数を呼び出したときに、呼び出し元へ返される値
// ↓
// function 関数名(仮引数1, 仮引数2) {
//     // 関数が呼び出されたときの処理
//     // ...
//     return 関数の返り値;
// }
// // 関数呼び出し
// const 関数の結果 = 関数名(引数1, 引数2);
// console.log(関数の結果); // => 関数の返り値

// 関数が何も値を返す必要がない場合は、return文そのものを省略できる。returnを省略した関数を呼び出すとundefinedになる。

// 引数は仮引数より少なくても呼び出せる。左から埋まっていき、余った仮引数にはundefinedが入る。
// 引数を仮引数より多くすると、溢れた分は無視される。

// 仮引数と同時に、デフォルトの引数を設定することもできる。（便利）
function defaultArgumentTest(amount = 1, tax = 0.1) {
  return `数量: ${amount}/消費税:${tax}`;
}
defaultArgumentTest(); // => 数量: 1/消費税: 0.1

// 引数がnullかundefinedの場合に入る初期値を定義もできる。
function addPrefix(text, prefix) {
  // prefixがnullまたはundefinedの時、デフォルト値（デフォルト:）を返す
  const pre = prefix ?? "デフォルト:";
  return pre + text;
}

// 関数は、()を付けないで呼び出すと値として扱われる。なので、変数に関数を代入したりもできる
function returnB() {
  return "B";
}
const returnBFunction = returnB;
console.log(returnB()); // => B
console.log(returnBFunction()); // => B

// アロー関数
// アロー関数は基本的に無名関数である。そのため、constした変数に代入されることが多い
// 仮引数の数と定義
const fnA = () => {
  /* 仮引数がないとき */
};
const fnB = (x) => {
  /* 仮引数が1つのみのとき */
};
const fnC = (x) => {
  /* 仮引数が1つのみのときは()を省略可能 */
};
const fnD = (x, y) => {
  /* 仮引数が複数のとき */
};
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = (x) => {
  return x * x;
}; // ブロックの中でreturn
const mulB = (x) => x * x; // 1行のみの場合はreturnとブロックを省略できる

// 同じ関数名で複数の関数を定義すると上書きされてしまうため避けるべき。

// コールバック関数を引数に取る関数やメソッドを、高階関数と呼ぶ。
// コールバック関数とは、「別の関数に引き渡して、特定の条件やタイミングで使ってもらう関数」
// オブジェクトのプロパティである関数をメソッドと呼ぶ。関数とメソッドの機能的な違いはないが、呼び方を区別した方がわかりやすいためプロパティである関数をメソッドと呼ぶ。
// 例えば、forEachメソッドは、配列から順番に値を取り出し、それを引数にしてコールバック関数を一度ずつ実行する。
const array = [1, 2, 3];
const output = (value) => {
  console.log(value);
};
array.forEach(output);

// メソッドを書く際は。短縮記法が良い。プロパティに関数を代入ではなく。クラスのメソッドとも共通の書き方なので、この方が推奨。
// オブジェクトリテラルの中で、メソッド名(){メソッドの処理}と書くとメソッドになる。
const obj6 = {
  testMethod() {
    return "this is testMethod";
  },
};
console.log(obj6.testMethod());

// 式と文

// 式とは
// 値を生成し、変数に代入できるもの

// switch文について
// 関数と組み合わせて条件に対する値を返す時に便利。switch()の引数が、どのcaseに引っ掛かるかということを調査する。
// defaultは、当てはまらなかった場合の処理。if文の最後のelseみたいな感じ。
function getECMAScriptName(version) {
  switch (version) {
    case "ES5":
      return "ECMAScript5";
    case "ES6":
      return "ECMAScript2015";
    default:
      console.log("しらないバージョンです");
      break;
  }
}
getECMAScriptName("ES5");

// ループと反復処理について

// while文
// while文は、条件式がtrueなら反復処理を行う。
// 無限ループの可能性もある。もっと安全な反復処理の書き方はあるため、安易にwhile文を使うよりも、ほかの書き方で解決できないかを考えてからで遅くない。
let z = 0;
let inc = 0;
while (inc < 5) {
  z += 1;
  console.log(z);
  inc += 1;
}

// do-while文
// while分とほぼ同じだが実行順序が異なる。最低1回中身の処理を実行して、条件次第でループ
let x = 0;
let i = 0;

do {
  console.log(x);
  x += 1;
  i += 1;
} while (i < 5);

// ユーザ入力のバリデーションで使える。天才？
let input2;
do {
  input = prompt("1〜10の数字を入れてください");
} while (input < 1 || input > 10);

// for文
// 繰り返し回数を決めたループができる。
// for (初期化式; 条件式; 増分式) {
//   実行する文;
// }

// 任意の数値が入った配列を受け取り、その合計値を返す関数
// ↓↓は、配列の長さは10。iは0始まりのため、0,1,2,3,4,5,6,7,8,9の時に実行される。arrayのlengthはn個のnを素直に取るため、1個ずれるので注意。
function sum(array) {
  let totalNum = 0;
  for (let i = 0; i < array.length; i++) {
    totalNum = totalNum + array[i];
  }
  return totalNum;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 配列をjoinで区切って出力
const arrayForJoin = [1, 2, 3, 4, 5];
console.log(arrayForJoin.join("と"));

// 配列のforEachメソッド
// forEachメソッドはアロー関数を使う
// forEachは、関数を引数に受け取れる高階関数

// 配列の要素を1つずつ出力する
const array2 = [1, 5, 9];
array2.forEach((currentNum) => {
  console.log(currentNum);
});

// 数値の合計を返すsum 関数をforEachメソッドで実装
function sumByForEach(numArray) {
  let totalNum = 0;
  numArray.forEach((currentNum) => {
    totalNum += currentNum;
  });
  return `合計は、${totalNum}です。`;
}

console.log(sumByForEach([1, 3, 4, 6, 7]));

// ちなみに以下はエラー。,区切りで配列は表せず、複数の引数になって2つ目以降はスルーされる。
console.log(sumByForEach(1, 3, 4, 6, 7));

// break;
// break;を使うと、処理の途中で強制的にループを終了させる。しかし、returnは値込みでループを終了できるので、そっちで良いと思った。
// →と思ったが、returnは関数の中でしか使えないみたい。スクリプトのトップレベルなど関数の外で書いている場合は、break;で処理を終了させるとよい。
// また、関数の中でもループだけを終わらせたい場合はbreak;。returnすると関数が終わってしまう。
// }
const items = [
  { name: "りんご", match: false },
  { name: "バナナ", match: true },
  { name: "みかん", match: false },
];

function process(items) {
  let found = null;
  for (const item of items) {
    if (item.match) {
      found = item;
      break;
    }
  }
  cleanup();
  log(found);
  return found;
}

// someメソッド
// someメソッドは配列に対して使う高階関数。配列の頭からコールバック関数を実行して、一度でもtrueになったらreturnをtrueにして処理を終了。
// .someの左側の配列からひとつずつ、some()が呼び出すコールバック関数の引数に入る。
const arrayContainEven = [1, 3, 5, 7, 9, 7, 5, 7];
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
}
if (arrayContainEven.some(isEven)) {
  console.log("偶数が含まれているよ");
} else {
  console.log("偶数は含まれていないよ");
}

// ちなみに結果を変数に入れるとわかりやすく書ける。（個人的には、結果のboolean値を再利用するならこっちの方が良いと思った）
// どちらも、someで配列の値を左から1つづつ取ってきて引数にしていることは変わりない。
// これはfunctionで定義してもいいし、アロー関数の無名関数でもいい。
const isContainBoolean = arrayContainEven.some((num) => {
  if (num % 2 === 0) {
    return true;
  }
});
// これでもOK。学びとして、function(){}でも無名関数を定義できる。逆に、アロー関数では名前をつけられないので変数に代入する。
// const isContainBoolean2 = arrayContainEven.some(function (num) {
//   if (num % 2 === 0) {
//     return true;
//   }
// });

if (isContainBoolean) {
  console.log("偶数が含まれているよ");
} else {
  console.log("偶数は含まれていないよ");
}

// 2つの数値を受け取って、その合計を返すアロー関数
const addTwoNunbers = (num1, num2) => {
  return num1 + num2;
};

// 配列内のすべての要素を2倍にして返すアロー関数
const arrayTo2x = (array) => {
  let returnArray = [];
  let i = 0;

  array.forEach((currentNum) => {
    returnArray[i] = currentNum * 2;
    i++;
  });

  return returnArray;
};
console.log(arrayTo2x([1, 3, 2, 0]));

// continue文を使うと、次のループに移動できる。

// 配列のfilterメソッド
// filterメソッドには、配列の中から特定の値だけを取り出す。コールバック関数として、配列の各要素が条件に一致するかテストする関数を渡す。
function isEven2(num) {
  return num % 2 === 0;
}

const isEvenOnArray = (array) => {
  return array.filter(isEven2);
};
console.log(isEvenOnArray([1, 2, 3, 4, 5]));

// for...in は列挙可能な「キー」を（プロトタイプ（オブジェクト同士を繋いで参照しにいくもの）由来も含めて）列挙する。
// 値だけ・自身のプロパティだけ取りたい場合は Object.keys / Object.entries などが向きやすい。
// Object.keys静的メソッドでオブジェクトの中身を列挙する場合。Object.keysはキーを列挙した配列を返すので、それに対してforEachを回している。
const objKeyTest = {
  a: 1,
  b: 2,
  c: 3,
};
Object.keys(objKeyTest).forEach((key) => {
  const value = objKeyTest[key];
  console.log(`key:${key}, value:${value}`);
});
// "key:a, value:1"
// "key:b, value:2"
// "key:c, value:3"

//　配列のメソッドはすごくたくさんある。[ref: MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

// オブジェクトについて
// オブジェクトは、プロパティ（keyとvalue）の集合体。
// 各ブラウザには、あらゆるオブジェクトの元となる`Object`というビルトインオブジェクトがあり、それに対してメソッドなどを利用できる。

// プロパティ名と値に指定する変数名が同じ場合は{ americanName }のように省略して書ける。
// 実際には、americanName: "Jack"が入っている。
// 分割代入でも同じ。{}の中でプロパティ名が単独で書かれている場合はこの記法であることに注意。
const americanName = "Jack";

const user1 = {
  americanName,
};
console.log(user1.americanName);

// オブジェクトリテラル({})は、ビルトインオブジェクトの`Object`のインスタンスを作っている。
// `Object`ビルトインオブジェクトは始祖。詳しくは後ほど。

// オブジェクトの分割代入。const { ja, en } = userLanguageとしたら、userLanguagesの中からjaキーとenキーの値を代入してくれる。
// frは、オブジェクトにないためundefinedになる。→JavaScriptでは、存在しないプロパティに対してアクセスした場合に例外ではなくundefinedを返す。
const userLanguages = {
  ja: "日本語",
  en: "英語",
};

const { ja, en, fr } = userLanguages;
console.log(ja);
console.log(en);
console.log(fr); // => undefined

// オブジェクトは、一度作成した後に値を変更できるミュータブルという特性を持つ。そのため、後からプロパティを追加することができる
// 単純にわかりづらいので、できる限り作成後に新しいプロパティは追加しないほうがよい。オブジェクトリテラルの定義時にまとめてやるのがベスト。
const obj7 = {};
obj7.newData = 7;
console.log(obj7.newData);

// オブジェクトのプロパティを削除するには、`delete`演算子を使う。削除したいプロパティを`delete`演算子の右に配置することで消せる。
const deleteTestObject = {
  data1: "data1",
  data2: "data2",
};

delete deleteTestObject.data1;
console.log(deleteTestObject);

// TIPS: 演算子とは？+や-だけではない。deleteは単項演算子
// ↓↓↓↓
// * 算術演算子：+、-、*、/（数値計算）
// * 比較演算子：<、>、==（値の比較）
// * 論理演算子：&&、||、!（真偽判定）
// * 代入演算子：=、+=（値の代入）
// * 単項演算子：delete、typeof、instanceof（単一の値に対する処理）

// constで定義したオブジェクト、値の変更はできる。再宣言ができない。

// プロパティの存在確認には、in演算子を使う。（真偽値を返す）
const inTestObject = {
  dog: "taro",
  cat: "meowmeow",
  human: "aichan",
};

let isExist = "human" in inTestObject;
if (isExist) {
  console.log(`humanは存在しています。（${inTestObject.human}）`);
} else {
  console.log(`humanは存在しません。`);
}

// Object.hasOwn静的メソッドもin演算子と基本的に同じことができる。しかし、プロトタイプオブジェクトが絡むと結果が変わるので後で解説。
const obj7 = {};
// objが"プロパティ名"を持っているかを確認する
Object.hasOwn(obj7, "dog"); // false

// プロパティの存在を確認してデータ取得までするなら、存在の確認と取得を分けるべきではない。
// そのような場合にオプショナルチェーンを使う。
// Optional chaining演算子（?.）は左辺のオペランドがnullish（nullまたはundefined）の場合は、それ以上評価せずにundefinedを返す。
// .記法だけではダメな理由は→存在しなかった時に例外のTypeErrorになる。一方Optional chainingはundefinedを返す。
const objOptionalChain = {
  a: {
    b: "objのaプロパティのbプロパティ",
  },
};
console.log(objOptionalChain?.a?.b);

// toStringメソッドを使うと、要素を文字列化できる。
// toStringメソッドをオブジェクトに使うと、[object Object]という文字列が返ってくる。これは中身ではなく、‘汎用 Object だ’ ということだけを示す。
// あまり使わなそう...

// ビルトインオブジェクト`Object`の静的メソッド
// 静的メソッド（スタティックメソッド）とは、始祖であるObjectそのものに実装されているメソッド
// いろんなことができる。

// オブジェクトの列挙（静的メソッドのひとtう）
// ①Object.keys静的メソッド: オブジェクトのプロパティ名の配列にして返す
// ②Object.values静的メソッド[ES2017]: オブジェクトの値の配列にして返す
// ③Object.entries静的メソッド[ES2017]: オブジェクトのプロパティ名と値の配列の配列を返す
const obj9 = {
  one: 1,
  two: 2,
  three: 3,
};
// `Object.keys`はキーを列挙した配列を返す
console.log(Object.keys(obj9));
// `Object.values`は値を列挙した配列を返す
console.log(Object.values(obj9));
// `Object.entries`は[キー, 値]の配列を返す
console.log(Object.entries(obj9));

// 変数に入れてforEachとかもできる。
const keysForEach = Object.keys(obj9);
keysForEach.forEach((currentKey) => {
  console.log(obj9[currentKey]);
});

// オブジェクトのマージ

// Object.assign; を使う方法。
const objectBase = { base: "base" };
const objectAA = {
  a: "a",
  a1: "a1",
};
const objectBB = {
  b: "b",
  b1: "b1",
};
const merged1 = Object.assign(objectBase, objectAA, objectBB);
console.log(merged1); // => { base: "base", a: "a", a1: "a1", b: "b", b1 = "b1" }

// ...（spread構文）。オブジェクトや配列を展開して個別の引数にしてくれる。
const objectA = {
  a: "a",
  a1: "a1",
};
const objectB = {
  b: "b",
  b1: "b1",
};
const merged = {
  ...objectA,
  ...objectB,
};
console.log(merged); // => { a: "a", a1: "a1", b: "b", b1 = "b1"}

// Object.assignとspread構文の使い分けとしては、既存のオブジェクトに追加するならObject.assign、新しいオブジェクトを作成するならどっちでも良い。
// 万が一プロパティ名が被ったら、後ろの方が優先される。
// assignを用いると、オブジェクトの複製ができる。新しい空のオブジェクトに、既存のオブジェクトをマージすればOK。（Shallow Copy: 浅い複製）というらしい。
// Shallow copyは、オブジェクトのルートにある値だけがコピーされる。（入れ子のオブジェクトのプロパティはコピーされず、元からあるものが参照される。オブジェクトの意図しない共有になってしまう。）
// Deep Copyをするには複雑な処理が必要。必要になったら調べる。

// オブジェクトについてまとめ
// - Objectというビルトインオブジェクトがある
// - {}（オブジェクトリテラル）でのオブジェクトの作成や更新方法
// - プロパティの存在を確認するにはin演算子かObject.hasOwn静的メソッドを使う
// - Optional chaining演算子（?.）はネストしたプロパティの存在確認とアクセスを同時に行う記法
// - オブジェクトのインスタンスメソッドと静的メソッド

// 【改めて】Objectは全ての親である
// functionやarrayはもちろん、ほぼ全てのオブジェクトはObject.prototypeを継承している。(例外はある)
// prototypeオブジェクトは、全てのオブジェクトの作成時に付与される特殊なオブジェクト。
// つまり、Object.prototypeのメソッドはすべてのオブジェクトで使える。
// arrayもfunctionも、Object.prototypeにあるメソッドは基本的に共通で使える

// 配列について
// 配列もオブジェクト。

// 二次元配列について: インデックスを複数指定すればいい。配列のうちx個目の値となる配列のy個目の値。
const twoDimensionsArray = [
  [1, 2],
  [2, 3],
];
console.log(twoDimensionsArray[1][1]); // =>2つ目の配列の2つ目の値（3）

// 配列は常にlengthの数だけ要素を持っているとは限らない。未定義の要素を含んだ配列は、「疎な配列」という。
const sparseArray = [1, , 3];
console.log(sparseArray.length); // => 3
// 2番目の要素は存在しないため undefined が返る
console.log(sparseArray[1]); // => undefined

// 配列[index]の代わりに、配列.at(番号)を使える。
const arrayAt = ["a", "b", "c"];

console.log(arrayAt.at(0)); // => "a"
console.log(arrayAt.at(1)); // => "b"

// -をつけると、後ろから数えた順番。
console.log(array.at(-1)); // 後ろから1つ目の要素にアクセス

// オブジェクトが配列か判断するには、Array.isArray静的メソッドを利用。これは、ObjectじゃなくてArrayにあるメソッド
const isArray = Array.isArray(arrayAt);

// 配列には分割代入ができる。左辺に定義した変数に、右辺の配列から対応する値が入っていく。右辺の配列が余ったら無視される。
const arraySplit = [1, 5, 9];
const [first, second, third] = arraySplit;
console.log(`${first},${second},${third}`); // => 1,5,9

// 「○番目の要素」と表す、要素の位置のことをインデックスという。0から始まる。
// indexOfメソッド: array.indexOf("JavaScript"); で探索できる。
// findIndexでは、配列内にオブジェクトが複数ある場合、配列の各要素をテストする関数をコールバック関数として渡すことで、特定の条件に当てはまるオブジェクトのインデックス番号を取得できる。
// 取得されるのは、条件を満たした最初の要素のインデックス
const colors = [{ color: "red" }, { color: "green" }, { color: "blue" }, { color: "blue" }];

const indexOfBlue = colors.findIndex((currentColor) => {
  return currentColor.color === "blue";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }

// findIndexではなくfindにすると、インデックスではなくオブジェクトが返ってくる。
// 例: { "color": "blue" }

// findLastを使うと、条件と一致した最後のオブジェクトが返ってくる。

// sliceメソッドを使うと、特定の範囲からだけデータを取得できる。
const arrayOfSliceTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// インデックス1から4まで(4の要素は含まない)の範囲を取り出す。（1,2,3）
console.log(arrayOfSliceTest.slice(1, 4)); // => ["B", "C", "D"]
// 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
console.log(arrayOfSliceTest.slice(1)); // => ["B", "C", "D", "E"]
// マイナスを指定すると後ろから数えた位置となる
console.log(arrayOfSliceTest.slice(-1)); // => ["E"]
// 第一引数と第二引数が同じ場合は、空の配列を返す
console.log(arrayOfSliceTest.slice(1, 1)); // => []
// 第一引数 > 第二引数の場合、常に空配列を返す
console.log(arrayOfSliceTest.slice(4, 1)); // => []

// includesメソッドは、特定の値が配列に含まれているか、真偽値のみで教えてくれる。

// 配列の追加と削除
// 基本情報にも出てくるpushとpopで配列末尾の値の追加、削除ができる
// unshiftとshiftを使えば、配列先頭に値の追加、削除ができる

// concatメソッドは、配列と配列を結合する
const arrayA = ["A", "a"];
const arrayB = ["B", "b"];
const concatinatedArray = arrayA.concat(arrayB);
console.log(concatinatedArray);

// concat は値・配列を末尾に足した「新しい配列」を返す（元配列はそのまま）。
// push も文字列などの追加はできるが、元配列を書き換え、返り値は新しい長さになる。

// ...（Spread構文）を使うことで、配列リテラル中に既存の配列を展開できる。
// concatを使うより楽そうだし任意の場所に展開できる。
const array9 = ["A", "B", "C"];
// Spread構文を使った場合
const newArray = ["X", "Y", "Z", ...array9];
console.log(newArray); // => [ "X", "Y", "Z", "A", "B", "C" ]
// 自由に展開できる
const newArray2 = ["X", "Y", ...array9, "Z"];
console.log(newArray2); // => [ "X", "Y", "A", "B", "C", "Z" ]

// popやshiftは末尾や先頭を削除するメソッドだった。
// 配列の特定の位置を削除するには、array.splice(インデックス, 削除する要素数); を使う
const arrayForSplice = ["a", "b", "c"];
// 1番目から1つの要素("b")を削除
arrayForSplice.splice(1, 1);
console.log(arrayForSplice); // => ["a", "c"]

// 配列のlengthプロパティへの代入をすると、その要素数に配列が切り詰められる。
const arrayForLength = [1, 2, 3, 4, 5];
arrayForLength.length = 2; // => [1,2]
console.log(arrayForLength);

// array = []を再度定義して配列をからにすることもできるが、元の配列をconstで定義していたら再定義できないのでletにしておく必要がある。

// 破壊的なメソッドと非破壊的なメソッド
// pushやpop、shiftは破壊的なメソッド（元の配列が書き換わる）
// concatは、「元の配列をコピー→別の配列を追加→統合された新しい配列を返す」という流れで、元の配列には影響が及ばない。これを非破壊的なメソッドという
// 破壊的なメソッドと非破壊的なメソッドは名前や戻り値で見分けるのが難しい。破壊的なメソッドは副作用をもたらす可能性があるので都度調べるなどして対策が必要。
// 破壊的なメソッドの非破壊バージョンも出てきている。splice、reverse、sortに対してtoSpliced、toReversed、toSortedなど。toから始まるものは非破壊であることが多い。

// 副作用を考えると、まずは非破壊的なメソッドで書けないか検討して、どうしても無理なら破壊的なメソッドを使うと良い。
// ↓↓
// 破壊的なメソッドは、シンプルですが元の配列も変更してしまうため、意図しない副作用が発生しバグの原因となる可能性があります。 非破壊的なメソッドは、使い分けが必要ですが元の配列を変更せずに新しい配列を返すため、副作用が発生することはありません。
// そのため、まず非破壊的な方法で書けるかを検討し、そうではない場合に破壊的な方法を利用するとよいでしょう。

// 配列を反復処理するメソッド復習
// forEach、map、filter、reduceの高階関数をよく使う。いずれもコールバック関数を取る。
// reduceは一旦スルー。難しそう。配列から配列要素の合計値というNumber型の値を返すらしい。

// array.flat非破壊メソッドは、多次元配列をフラットな配列に変換できる。
const nestedArray = [["a1", "a2"], ["b1", "b2"], 1];
const flattenedArray = nestedArray.flat(Infinity); // Infinityにすると、ネストの深さに関わらず全てをフラットにする。
console.log(flattenedArray);

// Object.groupby静的メソッドで、一つの配列から複数の配列に分割できる（偶数・奇数など任意の条件で。）

// 思ったこと。①配列やオブジェクトに対して何をやりたいかを明確にする能力, ②やりたいことを実現するにはどのメソッドや関数が適切かを判断する能力の2つが必要。後者は学習して全体像を掴んでおけばAIが助けてくれる。①が大切だ。

// 配列のデータは、加工してUIに渡されることが多い。そのため、多くの場合で複数の処理（メソッドや関数）が発生する。
// そのため、メソッドチェーンがよく使われる。メソッドチェーンは、メソッドの戻り値に対してメソッドを適用すること。

const chainMethod = ["a"].concat(["B"]).concat(["C"]);
console.log(chainMethod); // => [ "a", "B", "C" ]

// 文字列について

// 文字列の中に文字列リテラルと同じ記号が出現した場合は、\でエスケープする必要がある。
const str = 'This book is "js-primer"';
console.log(str); // => 'This book is "js-primer"

// 文字列結合演算子は+
const testName = "Dan";
console.log("俺は" + testName + "ですよ。");
// テンプレートリテラル（``）を使うとわかりやすい（個人的に）
console.log(`俺は${testName}ですよ。`);

// 文字列には、配列と同じようにIndexでアクセスできる（name[1]的な）。名前のイニシャルを取得する時とかに使う。
const nameForGetInitial = "oomisoka1231";
console.log(`イニシャルは${nameForGetInitial[0]}ですね。`);

// JavaScriptの文字列の各要素はUTF-16のCode Unitで構成されている。（Unicodeを使用。）
// 見た目1文字＝常に length 1 ではない。どういうことかというと、絵文字なんかはUTF-16で2文字分使ったりする。

// 文字列の分解をするsplitメソッド
// 第一引数に指定した区切り文字で、文字列を分解して配列にする
const strings = "赤・青・緑".split("・");
console.log(strings); // => ["赤", "青", "緑"]

// Stringのlengthプロパティは文字列の長さを返す。
console.log("この文字の長さは幾つですか？".length); // => 14

// 配列と同じく、sliceメソッドで「文字列の○文字目〜○文字目」だけ取得できる

// indexOfで特定の文字の順番を切り出して、sliceでそれ以降を出力もできる
// 半開区間?番号が終端を含まない など混乱するが、素直にindexOfで取得した番号をsliceで使えば意図する挙動（特定した文字列以降を切り出し）で機能するので問題ない。
const url = "http://google.com/?param=1";
const indexOfQuery = url.indexOf("?");
console.log(indexOfQuery); // => 18(0始まりなので19文字目)
const query = url.slice(indexOfQuery); // 18(19文字目)以降を抽出
console.log(query); // => ?param=1

// 文字列の検索
// 文字列の検索は3種類。①インデックスを返す。②マッチした文字列を返す。③マッチしたかどうかの真偽値を返す
// ①,②はindexOfを使う。③はstartsWith(),endsWith(),includes()のいずれかを使う。

// 正規表現について
// 正規表現は、RegExpオブジェクトで表現するか、正規表現リテラルで表現する。基本は正規表現リテラルでOK。

// 正規表現では、以下の文字列が特別な意味を持つ
// \ ^ $ . * + ? ( ) [ ] { } |
// 例えば、+は1回以上の繰り返しを意味する。正規表現で意味を持つ文字列は https://zenn.dev/ryome/articles/9a28660d27363b を参照。ちなみに、どの言語でも基本は同じ。
// TODO: 正規表現はどこかで詳しく学習する必要がある。
// +という特殊文字をそのまま文字として扱いたい場合は、\+のようにバックスラッシュでエスケープする。

// indexOfの正規表現版がsearch。
const string2 = "afdskafkkkkfjdsaf";
const kkIndex = string2.search(/kk/);
console.log(kkIndex);

// 正規表現オブジェクトを使って、真偽値の表現もできる。例えば、「冒頭が「にわ」」とか。
const str3 = "にわにはにわにわとりがいる";
// ^ - 検索文字列が先頭ならtrue
console.log(/^にわ/.test(str)); // => true
console.log(/^いる/.test(str)); // => false

// 正規表現は柔軟で便利だが、コードをパッと見た時に意図が伝わりにくい。なんせ複雑であるため。そのため、正規表現を扱う場合はコメントなどで意図を添えておくとよい。

// 正規表現で引っかかった文字列の一括置き換えもできる。できること多すぎて、都度やり方調べたほうが良さそう。

// URLを組み立てる
// 文字列としてURLを組み立てる場合は、+演算子で結合するより専用の関数を作った方が安全。
// 例えば、ルートのURLには末尾に/を含むと考える人もいる。その想定で関数を作って、下層ページのスラッグを/exampleのように入力すると//が生まれてしまう。これはエラーになる。
// →そのため、「ベースのURL末尾に/を検知したら消す」などの安全策が求められる。それを関数で実現する。

// TODO: タグ付きテンプレート難しかった

// ラッパーオブジェクトについて
// プリミティブ型のデータのうち、真偽値（Boolean）、数値（Number） 、BigInt、文字列（String）、シンボル（Symbol）にはそれぞれ対応するオブジェクトが存在する。例えば文字列ならString。

// Stringをnewすることで、Stringオブジェクトのインスタンスを作れる。
const str2 = new String("value");
console.log(typeof str2); // => object
console.log(str2.toUpperCase()); // StringのインスタンスメソッドであるtoUpperCaseも使える。

// TODO: Objectの階層がよくわかっていない。始祖となるObject > Stringオブジェクト/Booleanオブジェクト... > Stringインスタンス/Booleanインスタンス  あとはプロトタイプとかもあるがよくわからんな...
// →調査すると、階層ではなく、「プロトタイプチェーン」という仕組みとのこと。自分がどのオブジェクトか判断し、そのオブジェクトが使いたいメソッドを持っていたら使うし、持っていなかったら上の階層が持っているか判断しに行く。持っていたら使う。
// リテラルな値は、本来オブジェクトではないが、メソッドを使おうとすると一時的にラッパーオブジェクトが自動で作られ、そのラッパーオブジェクトが持っているメソッドを使う。
// 詳細は、docs/object-prototype-chain.md

// 【重要】プリミティブ型にアクセスするときは、自動で対応するラッパーオブジェクトに変換される。
// 例えば、"文字列"は、String("文字列")となる。自動で。これにより、プリミティブ型の"文字列"が、Stringオブジェクトのインスタンスメソッドを使えるようになる。
// わざわざインスタンスを作る必要はなく、リテラルで宣言すれば、必要な時に自動変換されてメソッドが使える。
// 復習: リテラルは、コード内で値を直接書くこと。英語の literal（文字通りの値）に相当。

// スコープとは
// スコープとは、変数の名前や関数などの他所から参照できる範囲を決めるもの。
// スコープの内側で定義された変数や関数はスコープの中からしか参照できない。
// →言い換えると、関数内で宣言した変数は、同じ関数内でしか参照できない。仮引数も同様。

// スコープがないと、グローバルで一意な変数名を考え続けないといけない。大変。

// スコープチェーンは内側から外側のスコープへと順番に変数が定義されているか探す仕組みのこと

// ブロック（{}の中）で宣言された変数は、ブロックの中でしか使えない（そうなの！？）
// スコープを制限するためにわざわざブロックで書くこともあるみたい。[ref](https://zenn.dev/kagan/articles/js-plain-block-statement)
{
  const innerBlock = "Dog";
  console.log(innerBlock); // => "Dog"
}
console.log(innerBlock); // => ReferenceError

// if文やwhile分もブロックスコープを作る。
// ブロック内で定義した値は他から参照できないが、ブロック内で既存の変数を更新した場合はブロックの外からでも最新の値にアクセスできる。
let dogName = "Aichan";
if (dogName === "Aichan") {
  const comment = "ジャイアン";
  console.log(comment); // => "ジャイアン"
  dogName = "Wappen";
}
// console.log(comment); // => ReferenceError
console.log(dogName);

// スコープチェーン
// ブロックの中にブロックをネストする。outerとinnerとすると、innerからはouterで定義した変数を呼び出せるが逆はできない。
// 簡単にいうと、内側→外側（深く→浅く or ローカル→グローバル）の向きで参照できる。

// プログラムのルートに書いたら、グローバル変数になる。グローバル変数はあらゆる場所から参照できる。
// グローバル変数は良くない。万が一ビルトインオブジェクトとかぶる変数を宣言してしまったら、全体に影響が及ぶ。変数のスコープを狭めておけば、影響は限定的になる。

// 【重要】基本的に、変数を参照できる範囲は小さくしておくべき！人間の認知的にも、グローバルスコープの汚染的にも。

// TODO: JSはモジュールで読み込むべきなのか。これまでそうしてこなかったけどどうすべきか調べる。

// 巻き上げについて
// 巻き上げとは、functionの宣言前に関数を呼び出しても「あるもの」として扱われること。変数は定義後に参照した方が安定する。
console.log(dogWanWan); // => エラー
const dogWanWan = "犬ワンワン";

console.log(dogWanWanFunction("あいちゃん")); // => 関数は、変数とは違い宣言前に呼び出しても安定して動作する。
function dogWanWanFunction(name) {
  return `${name}はワンワンと言っていますよ`;
}

// letとconstがブロック内でスコープを持つ変数を定義できるようになったため、グローバルスコープの汚染を防ぐための即時実行関数は不要。確かに、ちょっとハッキーな感じに見えたので使いたくないと思っていた。朗報
// しかし、即時実行関数は別の箇所で使われるので完全に不要なわけではない。あくまでも、グローバルスコープの汚染を防ぐための使い方が不要。

// クロージャー: 関数内から特定の変数を参照し続けることで関数が状態を持てる仕組み
// JavaScriptのスコープ（変数の見える範囲）は、プログラムを書いた場所によって決まる。
// 実行中に他の関数から呼び出されても、変数の参照先（スコープ）は変わらない。
const createCounter = () => {
  let count = 0;
  return function increment() {
    // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
    count = count + 1;
    return count;
  };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数
const myCounter = createCounter();
// myCounter関数の実行結果は`count`の評価結果
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2

// TODO: ↑↑の仕組みがちょっと難しかった。let count =0;で毎回リセットされると思ったが、returnの中しか返ってこないから違うみたい
// クロージャーは「静的スコープ」と「参照され続けている変数のデータが保持される」という2つの性質によって成り立っている

// 関数とthis
// thisはいろんなスコープやコンテクストで使えるが、基本的にはメソッドで使うので全パターンを覚えなくてもOK

// グローバルでthisを使うべきではない。
// 一応仕組みとしては、スクリプトのトップレベルのthisはグローバルオブジェクトを参照する（ブラウザだとwindowオブジェクト）
// 実行コンテクストがモジュールの場合はundefined。

// おさらい: オブジェクトのプロパティが関数だったら、メソッドと呼ぶ。
const ObjectContainsMethod = {
  method3x(num) {
    return num * 3;
  },
};
console.log(ObjectContainsMethod.method3x(6));

// メソッドをArrow Functionで実装すると以下。testFuncメソッドが、アロー関数である。
const ObjectContainsMethod2 = {
  testFunc: () => {
    return "テスト関数ですね";
  },
  testThisArrow: () => {
    return this;
  },
  testThisNormalFunc() {
    return this;
  },
};

console.log(ObjectContainsMethod2.testThisArrow()); // => window:home | アロー関数で作ったメソッドのthisは、自身を囲んでいるスコープのthisを指す。
//呼び出し時のベースオブジェクト（. の左）が this になる
console.log(ObjectContainsMethod2.testThisNormalFunc()); // => ObjectContainsMethod2 | 通常の関数で作ったメソッドのthisは、自身を囲んでいるオブジェクトを指す。
console.log(ObjectContainsMethod2.testFunc());

// thisは、実行時に決まる値である。関数の呼び出し元から暗黙的に渡される。
// thisが参照するのは、ベースオブジェクト。obj.method というふうに呼び出したら、obj がベースオブジェクトになる。
// strict modeのjsにおいて、メソッド以外の関数におけるthisはundefinedとなる。そのため、メソッド以外で使う必要がない。

// おさらい: メソッドは、何かしらのオブジェクトに所属している。

// thisは、メソッドの中で、同じオブジェクトに属する並列のプロパティ（関数含む）を呼び出すのに便利。
const person = {
  fullName: "Wahei Fujisaki",
  sayName() {
    return `Hello! ${this.fullName}!`; // ここでのthisは、personを指している。
  },
};
console.log(person.sayName()); // => Hello! Wahei Fujisaki!

// thisを含むメソッドを変数に代入してベースオブジェクトがない関数として実行した場合、strict mode ならundefinedとなる。
// →定義したオブジェクトの外で変数に入れて実行すると、変数のベースオブジェクトがない場合参照できずundefinedになるということ。
// →基本的にメソッドはオブジェクトの中で完結したいなぁ。

// 対策としては
// ①メソッドはメソッドとして使う。わざわざ別の変数に入れない。
// ②call,apply,bindといった、thisを明示的に記述する関数を使う。→あまり多く使わなそうなのでスルーで。

// コールバック関数におけるthisはundefinedになる。コールバック関数でthisを使いたい時は、this を別の変数(thatとか)に代入して、それをコールバック関数内で呼び出すとよい。
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    const that = this;
    return strings.map(function (str) {
      return that.prefix + "-" + str;
    });
  },
};
// `prefixArray`メソッドにおける`this`は`Prefixer`
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

// ↑↑のような状況で、Arrow Functionの仕様（自分を囲んでいるスコープのベースオブジェクトがthisになる）が逆に役立つ。
// 【重要】コールバック関数でthisを使いたい時は、Arrow Functionを使うとよい。（言い換えると、Arrow Functionにおけるthisは、Arrow Function自身の外側のスコープに定義された最も近い関数のthisの値k）
const Prefixer2 = {
  prefix: "pre",
  // これがメソッド
  prefixArray(strings) {
    // これがコールバック関数
    return strings.map((str) => {
      return `${this.prefix} - ${str}`; // コールバック関数のthisは、一つ外側のスコープ「prefixArray」のベースオブジェクト。
    });
  },
};
const prefixedArray = Prefixer2.prefixArray(["犬", "猫", "亀"]);
console.log(prefixedArray);

// クラスについて
// 「クラス」といってもさまざまなので、一緒くたにできない。
// JS Primerでは、構造、動作、状態を定義した構造をクラスと呼ぶ。

// クラスは設計図で、クラスから具体的なインスタンスを生成できる。Figmaのコンポーネントとインスタンスの関係に近い。

// クラスを定義するにはclass構文を使う。
// クラスは必ずコントラクタを持ち、contructor()という名前のメソッドで定義する。
// コントラクタは初期化を行うもので、インスタンスが生成された際に実行される。

class myClass {
  constructor() {
    let variable = 0;
    console.log("コンストラクタが実行されてクラスが初期化されました。");
    // コンストラクタ関数の処理
    // インスタンス化されるときに自動的に呼び出される
  }
}

// 関数式と同じように、クラスを式として変数に代入することもできる。
const classInVariable = class {
  constructor() {
    console.log("コンストラクタが実行されてクラスが初期化されました。");
  }
};

// コントラクタを書かないと、からのコントラクタが生成される。

// new演算子を使って、定義したクラスからインスタンスを生成できる。インスタンス化する時は引数が必要。
// 以下は、instance1とinstance2は別物。
const instance1 = new myClass();
const instance2 = new myClass();
console.log(instance1);

// new演算子の引数は、コンストラクタの引数に渡される。
// コンストラクタの引数は、this.${引数名}でアクセスできる。
class GenerateGeo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // return文はconstructorでは書かない。
  }
}

const geo = new GenerateGeo(960, 540);
console.log(`${geo.x},${geo.y}`);

// 上記がなぜxではなくてthis.xになるかの理解
// コンストラクタ内で変数を定義（x,y）してもスコープはコンストラクタ内限定になる。そうではなくクラス全体で使えるように、thisで「constructorの一つ上の"インスタンス"」に変数x,yを定義している。

// クラスは、関数のように呼び出せず、かならずnew する必要がある。
MyClass(); // => TypeError: class constructors must be invoked with |new|

// プロトタイプメソッドとは: 既存オブジェクトをコピーして新しいオブジェクトを作成するデザインパターン。複雑な初期化処理を避けられる。
// プロトタイプを聞くとややこしく感じるが、単にクラスからインスタンスを生成する仕組みのこと。

// 実装の練習: 「次のコードでは、Counterクラスにincrementメソッドを定義しています。 このときのCounterクラスのインスタンスは、それぞれ別々の状態（countプロパティ）を持ちます。」
// できた。使う時は、「インスタンス名.メソッド名」というふうに呼び出す。
// constructorでも、メソッドでも、インスタンスのルートに変数を置きたいときはthis.変数名とする
class Counter {
  constructor() {
    this.count = 0;
  }
  countUp() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.countUp();
counterA.countUp();

console.log(counterA.count);
console.log(counterB.count);

// ここで一息。クラスの構成要素としては、クラス > コンストラクタ/メソッド。ここからフィールドとかゲッターとかセッターとか新しい概念が出てきやがるらしい。

// クラス内のメソッド（プロトタイプメソッド）は、各インスタンスから一意のものとして参照される。各インスタンスが共通のメソッドを見ている。
// メソッドの呼び出し方は、インスタンス名.メソッド名()

// クラスでは、プロパティの参照（getter）、プロパティへの代入（setter）に対するアクセスプロパティを定義している。
// アクセッサプロパティはメソッド名（プロパティ名）の前にgetまたはsetをつけるだけ。
class クラス {
  // getter
  get プロパティ名() {
    return 値;
  }
  // setter
  set プロパティ名(仮引数) {
    // setterの処理
  }
}
const インスタンス = new クラス();
インスタンス.プロパティ名; // getterが呼び出される
インスタンス.プロパティ名 = 値; // setterが呼び出される

// getterは値を返すだけ。setterは値を代入できる。と覚えておこう。
// getとsetは、プロパティのフリをした（引数のいらない）メソッド。
// データの読み書きのタイミングでバリデーションや変換をしたい時に便利

// クラスフィールドについて
// ES2022で登場した。これまで、クラスの中で登場する変数はコンストラクタの中で初期値を宣言する必要があったが、クラスの直下に宣言できるようになった。
// 変数を定義するときは、constructorでthis.変数名とするか、クラスのルートで変数を定義してしまうか。
// 実行の順番は、クラスフィールド→コンストラクタ。

class TestClassField {
  count = 0;
  countUp() {
    this.count++;
  }
}

const countInstance = new TestClassField(); // この時点でcountは0。インスタンスを作る際にメソッドは自動で実行されない。constructorとクラスフィールドだけ。
console.log("ここで初期化されました。");
countInstance.countUp();
console.log(countInstance.count); // => 1
countInstance.countUp();
console.log(countInstance.count); // => 2
countInstance.countUp();
console.log(countInstance.count); // => 3

// クラスフィールドにて、コンストラクタで使う変数を値なしで定義しておくと読む人やAIに優しい。
class BlancTestField {
  count;
  countUp() {
    this.count++; // ここのthisは、呼び出し元によって変わってしまう。アロー関数にしたら固定される。
  }
  countUpArrow = () => {
    this.count++; // こうすると、生成されたインスタンスのcountを参照し続ける。
  };
}

// クラスフィールドでのthisは、インスタンスを指す。
// クラスフィールドは、constructorの中でthisに対してプロパティを追加するのと意味的にはほぼ同じ

// インスタンスの外からアクセスされたくないクラスフィールド（プロパティ）には、#をつける。
// #にアクセスしようとするとエディターでエラーを出してくれるのでありがたい。→ "プロパティ '#privateField' には private 識別子が指定されているため、クラス 'PrivateExampleClass' の外部ではアクセスできません。"
class PrivateExampleClass {
  publicField = 100;
  #privateField = 42;
  dump() {
    // Privateクラスフィールドはクラス内からのみ参照できる
    console.log(this.#privateField); // => 42
  }
}
const privateExample = new PrivateExampleClass();
privateExample.dump();
console.log(privateExample.publicField); // => 100
// console.log(privateExample.#privateField); // => Error

// 静的メソッドは、インスタンスを作成しなくても直接クラスから呼び出せる。
class StaticMethodTest {
  static staticMethod() {
    console.log("これは静的メソッドで、クラスから直接呼び出せます。インスタンスは作らなくていいよ。");
  }
}
StaticMethodTest.staticMethod(); // => これは静的メソッドで、クラスから直接呼び出せます。インスタンスは作らなくていいよ。

// 静的メソッドでのthisはクラス自身を参照し、インスタンスを参照しない。
// 静的クラスフィールドも作れる。これだけだと変数にオブジェクトを入れるのと変わりない気がするが、メソッドとセットで育てていきたい時に使うとのこと。
class Colors {
  static GREEN = "緑";
  static RED = "赤";
  static BLUE = "青";
}
// クラスのプロパティとして参照できる
console.log(Colors.GREEN); // => "緑"

// 【概念理解した気がするメモ】JavaScriptのチェーンの概念は、今いるスコープや階層から徐々に上にたどってものを探す。WPのテンプレートを、具体→抽象で探しているのと同じかも。
// →インスタンスからプロトタイプのメソッドを呼び出せるのも、プロトタイプチェーンのおかげ。最初はインスタンスにメソッドが定義されていないか探すが、なければ一つ上の階層のプロトタイプに探しにいく。
// インスタンスから見ると、クラスはプロトタイプチェーンの親である。

// 継承について
// "extends" を使って、既存のクラスを継承した新しいクラスを作成できる。
class Parent {}
class Child extends Parent {}
const instance = new Child();

// ビルトインオブジェクト（Arrayなど）も継承できる
class MyArray extends Array {
  get first() {
    return this.at(0);
  }

  get last() {
    return this.at(-1);
  }
}

// superを使うと、親クラスを参照できる。

// Nuxtの場合、Piniaで状態を管理できる。それと関数を使えば同じようなことができるしわかりやすいのでクラスはあまり使わなくて良さそう。
// しかし、利用するAPIがクラス形式だったりするので、知っておくに越したことはない。
// その他、フロントであまり使わない理由
// グローバルに近い状態 → Pinia の方が慣習・Devtools・テストと相性が良い。
// コンポーネント単位 → Composition API の関数の方が Reactivity と一体化しやすい。

//例外処理

// try...catch構文
// 例外（予期せぬエラーや非常事態）が発生しうるブロックをマークして、例外が発生した時の処理を記述する構文。
// ①try...catch構文のtryブロック内で例外が発生すると、tryブロック内のそれ以降の処理は実行されず、catch節に処理が移行する。
// ②catch節は、tryブロック内で例外が発生すると、発生したエラーオブジェクトとともに呼び出される。
// ③finally節は、tryブロック内で例外が発生したかどうかには関係なく、必ずtry文の最後に実行される。
try {
  console.log("try開始");
  undefinedFunction(); // => エラー。catchにエラーが渡される。
} catch (error) {
  console.log("エラーを受け取ったので、catchが実行されます。");
  console.log(error instanceof ReferenceError); // => true（具体的に発生するエラーは、エラーオブジェクトのインスタンス）
  console.log(`エラー:${error.message}`);
} finally {
  console.log("この節は必ず実行されます。");
}

// エラーは、JavaScriptのエンジンやブラウザが投げてくれる。ECMAScriptの仕様に従って。
// catchは、引数でそのエラーオブジェクトを受け取る。catch(error)のerror。

// throw分を使うと、例外を任意のタイミングで任意の内容で投げることができる。例外として投げられたオブジェクトは、catchの引数に入る。
try {
  throw new Error("任意のエラーを投げました");
} catch (errorObject) {
  console.log(`エラーです: ${errorObject}`);
}
// 例えば、数値が0より小さい時に以下のエラーを投げるとかもできる。
// throw new Error(`${num} is not positive.`);

// 上記はわかりやすいように簡略化したが、本来はErrorオブジェクトを投げるべき。
// 後述するスタックトレースがやりやすいよう、Errorオブジェクトが推奨される。

// 状況に合わせたエラーがすでに定義されている。それは。ビルトインエラーと呼ばれる。
// 例: ReferenceError | SyntaxError | TypeError など

// 適切なエラーをthrowすれば、デバッグが楽になる。どこでつまづいているかわかるため。
