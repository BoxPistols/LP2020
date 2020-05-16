"use strict";

{
  // アイコンクラスに.onclickイベントを追加
  document.querySelector(".m_mobile-menu").onclick = function () {
    document.querySelector(".overlay").classList.toggle("menu-open");
    document.querySelector(".nav").classList.toggle("menu-open");
    this.classList.toggle("menu-open");
  }; // Text Animation


  document.querySelector('.tex-anime__button').onclick = function () {
    const texAnim_target = document.querySelector('.tex-anime__ml');
    texAnim_target.classList.toggle('is-anime');
  };
}