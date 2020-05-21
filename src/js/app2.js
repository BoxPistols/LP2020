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
  r(x + "さん!")
}
hello("佐々波")

r(`<br>`)

/*----------  Object  ----------*/
const person = {
  name: ['Miles', 'Davis'],
  age: 24,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'guiter'
  },
  getName: function(){
    r(`${this.name[1]} Play ${this.interests.music}`)  }
}
r(person.name[1] + '!!')
r(`<br>`)
person.getName()

r(`<br>`)

/*----------  Loop  ----------*/
const array = [1,2,3,4,5,6,7]
for (let i = 0; i < array.length; i++) {
  r(array[i])
}