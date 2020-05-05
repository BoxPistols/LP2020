{
  // アイコンクラスに.onclickイベントを追加
  document.querySelector(".mobile-menu-icon").onclick = function () {
    document.querySelector("body").classList.toggle("menu-open")
  }
}