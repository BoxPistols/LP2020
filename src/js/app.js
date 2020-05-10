{
  // アイコンクラスに.onclickイベントを追加
  document.querySelector(".m_mobile-menu").onclick = function () {
    document.querySelector(".overlay").classList.toggle("menu-open")
    document.querySelector(".nav").classList.toggle("menu-open")
    this.classList.toggle("menu-open")
  }
}