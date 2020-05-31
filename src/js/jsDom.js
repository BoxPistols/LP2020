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
