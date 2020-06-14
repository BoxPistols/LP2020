document.addEventListener('DOMContentLoaded', function () {
  /*
  // target = TextAnime String
  const el = document.querySelector('.js-tex-anime__ml');
  const el2 = document.querySelector('.js-tex-anime__ml.v2');
  // 定数 ＝ ターゲット.内部HTML.掃除関数（インデントの隙間もNodeなので）
  let concatStr = '' // 変数 concatStr　初期化
  const str = el.innerHTML.trim().split('') //.split('')= 配列化
  const str2 = el2.innerHTML.trim().split('') //.split('')= 配列化

  /*
  for (const c of str) {
    // console.log(str.length)
    // c = c.replace(/\s+/, '&nbsp;')
    concatStr += `<span class="char">${c.replace(/\s+/, '&nbsp;')}</span>`
  }
  el.innerHTML = concatStr
  // console.log(concatStr)

  // to reduce
  el.innerHTML = str.reduce((acc, curr) => {
    return `${acc}<span class="char"> ${curr.replace(/\s+/, '&nbsp;♡')}</span>`
  }, '')

  el2.innerHTML = str2.reduce((acc, curr) => {
    return `${acc}<span class="char"> ${curr.replace(/\s+/, '&nbsp;♡')}</span>`
  }, '')
  */

});


/*----------  Class on js  ----------*/
class TextAnim {
  constructor(t) {　// constructor = 初期化されるタイミングで実行される関数 (引数)
    this.t = document.querySelector(t)　// 値を格納
  }
  log() {
    console.log(this.t)
  }
  toggleClass() {
    this.t.classList.toggle('is-anime')
  }
}


/*----------  js Text Animation  ----------*/
document.querySelector('.js-tex-anime__button').onclick = function () {
  /*   const texAnim_target = document.querySelector('.js-tex-anime__ml')
  const texAnim_target2 = document.querySelector('.js-tex-anime__ml.v2')
  texAnim_target.classList.toggle('is-anime')
  texAnim_target2.classList.toggle('is-anime') */
  // Classにまとめます
  const c1 = new TextAnim('.js-tex-anime__ml')
  c1.toggleClass()
  c1.log()
  const c2 = new TextAnim('.js-tex-anime__ml.v2')
  c2.toggleClass()
  c2.log()
}
