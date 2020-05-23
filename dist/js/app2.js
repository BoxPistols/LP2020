/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*=============================================
= -----開発用設定＝JavaScriptHTML表示----- =
=============================================*/

/**
* 開発用変数
* r(内容)でel内にHTML表示をさせるための変数
* document.writeだとbodyのスコープ外になりCSSが効かない
*/
// ターゲット設定
const el = document.querySelector('.is-debug .org .mol');

const r = _x => {
  return `${el.insertAdjacentHTML('beforeend', `${_x}`)}`;
}; // Break / Line


const br = `<br>`;
const ln = `-------------------------------------------------------------`;
const bl = br + ln; // Text Utility

const h2 = _h => {
  return `${el.insertAdjacentHTML('beforeend', `<h2>${_h}</h2>`)}`;
};

const h3 = _h => {
  return `${el.insertAdjacentHTML('beforeend', `<h3>${_h}</h3>`)}`;
};

const p = _p => {
  return `${el.insertAdjacentHTML('beforeend', `<p>${_p}</p>`)}`;
};

const sub = _s => {
  return `${el.insertAdjacentHTML('beforeend', `<sub>${_s}</sub>`)}`;
};
/**
 *
 * Example
 * r(`処理/表示内容`)
 * r(br) 改行
 * r(ln) 罫線
 * r(bl) 改行＋罫線
 * p(`テキスト内容`)
 * sub(`付加説明内容`)
 */

/*=====  End of 開発用設定  ======*/


h2(`Basic`);
/*----------  Function  ----------*/

h3(`関数`);
sub(`変数に関数を代入、実行`);
/* function hello(x){
  r(x + "さん")
} */

const hello = function hello(x) {
  r("Hello!" + x);
};

hello("John");
r(bl);
/*----------  Object  ----------*/

h3(`メソッド`);
sub(`メソッド、配列も入れられる`);
const person = {
  name: ['Miles', 'Davis'],
  age: 24,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'guiter'
  },
  getName: function getName() {
    r(`${this.name[1]} Play ${this.interests.music}`);
  }
};
r(person.name[1] + '!!');
r(br);
person.getName();
r(br);
/*----------  Loop  ----------*/

const array = [1, 2, 3, 4, 5, 6, 7];
h3(`for文`);

for (let i = 0; i < array.length; i++) {
  r(array[i]);
}

r(br);
sub(`in = 添え字（index`);

for (let i in array) {
  r(i);
}
/*
  * indexの中で値を取得↑
  let v = array[i]
  r(v)
*/


r(br);
sub(`of = 値`);

for (let v of array) {
  r(v);
}

r(bl);
/*----------  Todo List  ----------*/

h3(`Todo List Object`);
const todos = [{
  id: 1,
  title: 'Study English',
  completed: true
}, {
  id: 2,
  title: 'Study JavaScript',
  completed: false
}, {
  id: 3,
  title: 'Slack on Design Team',
  completed: true
}, {
  id: 4,
  title: 'Eat Lunch',
  completed: false
}];
sub(`オブジェクト全要素抽出`); // for (const i = 0; i < todos.length; i++) {

for (t in todos) {
  r('id: ' + todos[t].id + ' / ');
  r('title: ' + todos[t].title + ' / ');
  r(' completed: ' + todos[t].completed + '<br>');
  console.log(todos[t]);
}

p(`条件抽出`);
sub(`todo completed`);

for (i in todos) {
  let todo = todos[i];

  if (todo.completed === true) {
    r(`Done! ` + todo.title + `<br>`);
  }
}

sub(`条件検出 boolean`);
/*
 * !で否定
*/

if (1 === '1') {
  r(`== true / 型問わず`);
} else {
  r(`=== 型も完全一致`);
}

r(br);
sub(`真偽判定 ＋ 変数`); // 真偽判定

const num = 1; // 0だとfalse

const bool = Boolean(num); // 真偽関数

r(bool);
r(br);
sub(`真偽判定 + 条件分岐連動`);

if (num) {
  r(`this is true`);
} else {
  r(`this is false`);
}

/***/ })
/******/ ]);