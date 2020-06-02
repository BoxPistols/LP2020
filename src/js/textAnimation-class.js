document.addEventListener('DOMContentLoaded', function () {
  const ta = new TextAnimation('.js-tex-anime__ml');
  const ta2 = new TextAnimation('.js-tex-anime__ml.v2');
  setTimeout(() => {
    ta.animate()
  }, 400)
  setTimeout(() => {
    ta2.animate()
  }, 800)

  /*----------  js Text Animation  ----------*/
  document.querySelector('.js-tex-anime__button').onclick = function () {
    ta.animate()
    ta2.animate()
  }
});

/*----------  Class on js  ----------*/
class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el)
    this.chars = this.el.innerHTML.trim().split('')
    this.el.innerHTML = this._splitText()
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;♡')
      return `${acc}<span class="char"> ${curr}</span>`
    }, '')
  }
  animate() {
    const _that = this // thisを代入しておく
    window.setTimeout(function () { // コールバックファンクション
      console.log(_that)
      _that.el.classList.toggle('is-anime')
    }) // bindを用いたthisの束縛
    // window.setTimeout(function () {
    //   console.log(this)
    //   this.el.classList.toggle('is-anime')
    // }.bind(this)) // bindを用いたthisの束縛
  }
}