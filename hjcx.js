
// ==UserScript==
// @name           hjcx-vip: 海角纯享版 破解VIP,观看所有收费视频
// @namespace      https://github.com/foreverone0/hjcx_vip
// @version        1.0.2
// @author         foreverone0
// @description    破解 海角纯享版(https://hjcx.cc) 收费视频.本插件完全免费,请注意甄别,避免上当受骗.
// @homepage       https://github.com/foreverone0/hjcx_vip#readme
// @supportURL     https://github.com/foreverone0/hjcx_vip/issue
// @updateURL      https://raw.githubusercontent.com/foreverone0/hjcx_vip/master/hjcx.js
// @downloadURL    https://raw.githubusercontent.com/foreverone0/hjcx_vip/master/hjcx.js
// @run-at         document-idle
// @match          https://haijiao.com/*
// @match          https://www.haijiao.com/*
// @match          https://www.hjcx.cc/*
// @match          https://hjcx.cc/*
// @match          */topic/*
// @license        MIT
// ==/UserScript==
(function () {
  'use strict';

  function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/;expires=" + new Date(Date.now() + 864e5).toUTCString() + ";";
  }
  setCookie("is_vip", "1");

})();
