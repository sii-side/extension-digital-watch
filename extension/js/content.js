'use strict';

var watch = document.createElement('div');
watch.classList.add('ext-watch');
document.body.appendChild(watch);

var timer = window.setInterval(function () {
  var now = new Date();
  var h = now.getHours();
  h = ('0' + h).slice(-2);
  var m = now.getMinutes();
  m = ('0' + m).slice(-2);
  var s = now.getSeconds();
  s = ('0' + s).slice(-2);
  watch.innerHTML = h + ':' + m + ':' + s;
}, 1000);