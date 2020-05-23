/* =============================================
=
 * -----開発用設定＝JavaScriptHTML表示----- =
 * =============================================
 */

/**
* 開発用変数
* r(内容)でel内にHTML表示をさせるための変数
* document.writeだとbodyのスコープ外になりCSSが効かない
*/

// ターゲット設定
const el = document.querySelector('.is-debug .org .mol')
const r = (_x) => {
  return `${el.insertAdjacentHTML('beforeend', `${_x}`)}`
}

// Break / Line
const br = `<br>`
const ln = `-------------------------------------------------------------`
const bl = (br + ln)

// Text Utility
const h2 = (_h) => {
  return `${el.insertAdjacentHTML('beforeend', `<h2>${_h}</h2>`)}`
}
const h3 = (_h) => {
  return `${el.insertAdjacentHTML('beforeend', `<h3>${_h}</h3>`)}`
}
const p = (_p) => {
  return `${el.insertAdjacentHTML('beforeend', `<p>${_p}</p>`)}`
}
const sub = (_s) => {
  return `${el.insertAdjacentHTML('beforeend', `<sub>${_s}</sub>`)}`
}

/**
 *
 * Example
 * r(`処理/表示内容`)
 * r(br) 改行
 * r(ln) 罫線
 * r(bl) 改行＋罫線
 * p(`テキスト内容`)
 * sub(`付加説明内容`)
 */

/*=====  End of 開発用設定  ======*/

h2(`Basic`)

/*----------  Function  ----------*/
h3(`関数`)
sub(`変数に関数を代入、実行`)

/* function hello(x){
  r(x + "さん")
} */
const hello = function (x) {
  r("Hello!" + x)
}
hello("John")

r(bl)

/*----------  Object  ----------*/
h3(`メソッド`)
sub(`メソッド、配列も入れられる`)

const person = {
  name: [
    'Miles', 'Davis'
  ],
  age: 24,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'guiter'
  },
  getName: function () {
    r(`${this.name[1]} Play ${this.interests.music}`)
  }
}
r(person.name[1] + '!!')
r(br)
person.getName()

r(br)

/*----------  Loop  ----------*/
const array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7
]

h3(`for文`)

for (let i = 0; i < array.length; i++) {
  r(array[i])
}

r(br)
sub(`in = 添え字（index`)
for (let i in array) {
  r(i)
}
/*
  * indexの中で値を取得↑
  let v = array[i]
  r(v)
*/

r(br)
sub(`of = 値`)

for (let v of array) {
  r(v)
}

r(bl)

/*----------  Todo List  ----------*/
h3(`Todo List Object`)

const todos = [
  {
    id: 1,
    title: 'Study English',
    completed: true
  }, {
    id: 2,
    title: 'Study JavaScript',
    completed: false
  }, {
    id: 3,
    title: 'Slack on Design Team',
    completed: true
  }, {
    id: 4,
    title: 'Eat Lunch',
    completed: false
  }
]

sub(`オブジェクト全要素抽出`)
// for (const i = 0; i < todos.length; i++) {
for (t in todos) {
  r('id: ' + todos[t].id + ' / ')
  r('title: ' + todos[t].title + ' / ')
  r(' completed: ' + todos[t].completed + '<br>')
  console.log(todos[t])
}

p(`条件抽出`)
sub(`todo completed`)
for (i in todos) {
  let todo = todos[i]
  if (todo.completed === true) {
    r(`Done! ` + todo.title + `<br>`)
  }
}

sub(`条件検出 boolean`)
/*
 * !で否定
*/
if (1 === '1') {
  r(`== true / 型問わず`)
} else {
  r(`=== 型も完全一致`)
}

r(br)

sub(`真偽判定 ＋ 変数`)
// 真偽判定
const num = 1 // 0だとfalse
const bool = Boolean(num) // 真偽関数
r(bool)

r(br)

sub(`真偽判定 + 条件分岐連動`)
if (num) {
  r(`this is true`)
} else {
  r(`this is false`)
}

r(bl)

/*----------  Default propaty  ----------*/
h3(`引数 デフォルトの値の設定`)

p(`helloDefName関数 on 変数`)
// function helloDefName(name = 'Taro') {
  const helloDefName = function(name = 'Taro') {
    r(name + "さん")
  }

  sub(`通常の値設置`)
  helloDefName('Yamamoto')

  r(br)

  sub(`関数の値を未設置にする`)
  // default
  helloDefName()


/*----------  Arrow Function  ----------*/
h3(`Arrow function`)

p(`アロー関数で1行にまとめる`)

sub(`{ }が要らない *1行の時に限る`)

const arrowFunc = (name, age) => r(`My data is ${name} ${age}歳`)
arrowFunc('Sakata', 23)


sub(`戻り値 return不要`)
const arrowReturn = (age) => 'ぼく' + 20 + '歳'
r(arrowReturn())

p(`配列 forEach`)

sub(`従来のforEach`)
array.forEach(function(value){
  r(value)
})

sub(`ArrowのforEach`)
array.forEach(value => r(value))

/*----------  Callback Function  ----------*/
h3(`Callback function`)

p(`引数に渡す関数 / 関数を変数として扱う＝オブジェクト`)

sub(`関数の実行 *()は関数の実行結果`)

// 関数の実行 引数に関数の実行内容を入れる
// 第二引数 関数実行時に無名関数の実行
function helloCallback(callback, secondParam){
  // 関数の実行()
  // r('ハローコールバック & ' + callback() + '// 無名関数の変数:' + getName())
  r(callback(secondParam))
}


// 引数に入れる用の関数の作成
function getMyName() {
  return 'まいねーむ'
}

const getName = () =>{
  return 'ゲットネーム'
}

// 引数に関数を入れる 実行は元の関数内で実行()
// helloCallback(getMyName)

// helloCallbackの第一引数に 無名関数の処理結果を渡す
helloCallback(function (x){
  return "無名関数 + " + x
}, '第二引数')
// 同じ
// helloCallback(() => ' on Code')


/*----------  Callback Test  ----------*/
sub(`callback test`)

// コールバック関数 (仮引数)
function test_callback(x){
  r('test + ' + x())
}
// 関数作成 戻り値あり 仮引数の中に入れる処理 値
function test_getName(){
  return 'テストCallback'
}

// 結果を表示 コールバック関数で、値は↑の関数の処理結果
// test_callback(test_getName())

// 無名関数を当てる
// test_callback(function(){
  //   return "無名"
  // })
  // 省略
  test_callback(() => '無名シンプル')


  /* 第二引数のテスト*/
  sub(`第二引数のあるコールバック関数`)

  function test_callbackSecond(x, y){
    r(`コールバック+` +  x(y))
  }

  // test_callbackSecond_Fc(() => '第二引数ファンくしょん')
  // ここの無名関数の引数にyが渡ってくる
test_callbackSecond(function(z) {
  return '1stProp/' + z
}, '2ndProp')


/*----------  Callback Calc  ----------*/
sub(`calc`)

// TODO: 復習 ↑↓

// 計算関数(仮引数, 仮引数, 仮引数(計算用))
function doSomething(a, b, callback){
  // 変数 = 仮引数(計算用(引数))
  const result = callback(a, b)
  // 表示
  r(result)
}
// 計算用関数
function multiplay(a, b){
  // 計算処理
  return a * b
}
function plus(a, b){
  return a + b
}

// 関数の実行(値, 値, 計算関数)
doSomething(2, 5, multiplay)
r(br)
doSomething(2, 5, plus)
