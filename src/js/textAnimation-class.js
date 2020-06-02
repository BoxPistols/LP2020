/*----------  js Text Animation  ----------*/
document.querySelector('.js-tex-anime__button').onclick = function () {
  const texAnim_target = document.querySelector('.js-tex-anime__ml')
  const texAnim_target2 = document.querySelector('.js-tex-anime__ml.v2')
  texAnim_target.classList.toggle('is-anime')
  texAnim_target2.classList.toggle('is-anime')
}

// TODO: re study
document.addEventListener('DOMContentLoaded', function () {
  const ta = new TextAnimation('.js-tex-anime__ml');
  const ta2 = new TextAnimation('.js-tex-anime__ml.v2');
  ta.animate()
  ta2.animate()
});
/*----------  Class on js  ----------*/
class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el)
    this.chars = el.innerHTML.trim().split('')
    this.innerHTML = this._splitText
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      return this.chars`${acc}<span class="char"> ${curr.replace(/\s+/, '&nbsp;♡')}</span>`
    }, '')
  }
  animate() {
    this.el.classList.toggle('is-anime')
  }
}