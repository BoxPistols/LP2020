{
  // アイコンクラスに.onclickイベントを追加
  document.querySelector(".m_mobile-menu").onclick = function () {
    document.querySelector(".overlay").classList.toggle("menu-open")
    document.querySelector(".nav").classList.toggle("menu-open")
    this.classList.toggle("menu-open")
  }

  export class PersonSet {
    constructor(id, name) {
      this.id = id
      this.name = name
    }
    printPersonData() {
      console.log(this.name)
    }
  }

  const psD = new personSet(20, "北斗神拳")
  psD.printPersonData()
}