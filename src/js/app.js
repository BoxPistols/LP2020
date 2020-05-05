{
  // アイコンクラスに.onclickイベントを追加
  document.querySelector(".m_mobile-menu").onclick = function () {
    document.querySelector("body").classList.toggle("menu-open")
  }
}