"use strict";

{
  /*----------  Contents Animation  ----------*/
  const animeAction = document.querySelector('.anime-action-name__ml  >p');
  const appear = document.querySelector('.appear');
  const defaultClass = "anime-contents__ml appear";

  document.querySelector('.is-anime-contents').onclick = function () {
    appear.classList.toggle('inview');
    appear.classList.contains('inview') ? this.innerText = "Animation Re Play" : this.innerText = "Animation Play";
    /* if (appear.classList.contains('inview')){
      this.innerText = "Animation Stop"
    }else{
      this.innerText = "Animation Play"
    } */
  };

  document.querySelector('.is-anime-contents__up').onclick = function () {
    appear.className = defaultClass;
    appear.classList.toggle('up');
    animeAction.innerText = "Up";
  };

  document.querySelector('.is-anime-contents__down').onclick = function () {
    appear.className = defaultClass;
    appear.classList.toggle('down');
    animeAction.innerText = "Down";
  };

  document.querySelector('.is-anime-contents__left').onclick = function () {
    appear.className = defaultClass;
    appear.classList.toggle('left');
    animeAction.innerText = "Left";
  };

  document.querySelector('.is-anime-contents__right').onclick = function () {
    appear.className = defaultClass;
    appear.classList.toggle('right');
    animeAction.innerText = "Light";
  }; // アイコンクラスに.onclickイベントを追加


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