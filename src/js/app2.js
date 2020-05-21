/* =============================================
=            開発用変数・関数
 * =
=============================================
 */
const el = document.querySelector('.is-debug .org .mol')
const r = (_x) => {
  return `${el.insertAdjacentHTML('beforeend', `${_x}`)}`
}
/*=====  End 開発用メソッド  ======*/

/* function hello(x){
  r(x + "さん")
} */
const hello = function(x){
  r(x + "さん")
}
hello("もん!")
