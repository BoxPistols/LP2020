document.addEventListener('DOMContentLoaded', function(){
  // target = TextAnime String
  const el =  document.querySelector('.js-tex-anime__ml');
  // 定数 ＝ ターゲット.内部HTML.掃除関数（インデントの隙間もNodeなので）
  let concatStr = '' // 変数 concatStr　初期化
  const str = el.innerHTML.trim().split('') //.split('')= 配列化

  /*
  for (const c of str) {
    // console.log(str.length)
    // c = c.replace(/\s+/, '&nbsp;')
    concatStr += `<span class="char">${c.replace(/\s+/, '&nbsp;')}</span>`
  }
  el.innerHTML = concatStr
  // console.log(concatStr)
  */

  // to reduce
  el.innerHTML = str.reduce((acc, curr) => {
    return `${acc}<span class="char"> ${curr.replace(/\s+/, '&nbsp;♡') }</span>`
  }, '')
});



/*----------  js Text Animation  ----------*/
document.querySelector('.js-tex-anime__button').onclick = function () {
  const texAnim_target = document.querySelector('.js-tex-anime__ml')
  texAnim_target.classList.toggle('is-anime')
}

