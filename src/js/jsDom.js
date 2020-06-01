// ターゲット設定
const el_dom = document.querySelector('.is-debug .org .mol__jsDom')
const d = (_x) => {
  return `${el_dom.insertAdjacentHTML('beforeend', `${_x}`)}`
}

/* d(document.body)
d(`<br>`)
d(document.head)
d(`<br>`)
d(document.body.children) */
d(`<br>`)

/*----------  Dom selector  ----------*/
const dom_h1 = document.querySelector('.mol__jsDom .dom_h1')
dom_h1.innerText = "Render replace H1"

const dom_subTitle = document.querySelector('.mol__jsDom .sub_title')
dom_subTitle.classList.add('cRed')

const dom_list = document.querySelectorAll('.mol__jsDom .list');

dom_list.forEach(node =>(node.classList.add('cGreen')))

const dom_event_isClick = document.querySelector('.btn.dom_event.is-click')

/*----------  Dom Event Function ----------*/
/* dom_event_isClick.addEventListener('click', function(){
  alert('hello')
});
 */

// 関数単体で作成　
const event_Hello = function(){
  alert('event_Hello!!')
}
// ターゲットに対して、イベントを設定  変数（実行の種類, 作成しておいた関数）
dom_event_isClick.addEventListener('click', event_Hello)

// forEach
d(`<br><p>foeEach List addEventListener</p>`)
d(`<br><p>Set Style Multi</p>`)

// const 定数 = function(){ 処理 }　<- 無名関数
function changeColor(){
  if (this.style.color === 'red'){
    this.style.color = 'yellow'
  }else{
    this.style.color = 'red'
  }
}
const changeBGColor =　function(){
  this.style.backgroundColor = 'darkgray'
}
// const list_Hello = function(){
//   this.style.color = 'yellow'
// }

// 変数（ターゲットドキュメント）.forEach( 実行用引数 => （実行用引数.addEventListener('実行タイプ',無名関数の定数)）)
dom_list.forEach(node => (node.addEventListener('click', changeColor)) )
dom_list.forEach(node => (node.addEventListener('click', changeBGColor)) )



/*=============================================
=            Load            =
=============================================*/

const dcl = document.querySelector('.dcl');
const load = document.querySelector('.load');

/* 読み込みタイミング
 * ターゲットのHTMLよりJSの読み込みタイミングの方が早ければエラー
 * DOMContentLoadedで、Domが読み込まれてから発火させる
 */

/**
  // DOMContentLoadedスコープの外側に設置、かつjsが先読みだと読み込まれない
  document.addEventListener("DOMContentLoaded"...への設置で読み込み可能になる
  window.addEventListener("load", function ()でも良いが、これは全部読み込んでからとなるので、表示は遅くなる
  //
  */
  const h1 = document.querySelector('h1');
  h1.style.color = 'red';

document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector('h1#main-title');
  h1.style.color = 'blue';

  // const h1 = document.querySelector('h1');
  // h1.style.color = 'done';
  // console.log("load DOMContentLoaded")
});

window.addEventListener("load", function () {
  // const h1 = document.querySelector('h1');
  // h1.style.color = 'red';
  // console.log("load")
  const h1 = document.querySelector('h1#main-title');
  h1.style.color = 'yellow';

});

// ダウンロードを待たずに発火＝HTMLがDomに変換されたタイミングで発火
window.addEventListener("DOMContentLoaded", function (event) {
  dcl.classList.add('done');
});

// 画像も全部読み込んでから発火 documentはload出来ない
window.addEventListener("load", function (event) {
  load.classList.add('done');
});　