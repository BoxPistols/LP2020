// ターゲット設定
const el_dom = document.querySelector('.is-debug .org .mol__jsDom')
const d = (_x) => {
  return `${el_dom.insertAdjacentHTML('beforeend', `${_x}`)}`
}

d(document.body)
d(`<br>`)
d(document.head)
d(`<br>`)
d(document.body.children)

d(`<br>`)

const dom_h1 = document.querySelector('.dom_h1')
dom_h1.innerText = "Render replace H1"
