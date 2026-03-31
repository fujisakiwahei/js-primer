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
