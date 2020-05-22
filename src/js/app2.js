/*=============================================
= -----開発用設定＝JavaScriptHTML表示----- =
=============================================*/

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
  r("Hello!" + x )
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
  },
  {
    id: 2,
    title: 'Study JavaScript',
    completed: false
  },
  {
    id: 3,
    title: 'Slack on Design Team',
    completed: true
  },
  {
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