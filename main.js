'use strict';

const moment = require('moment');
console.log(moment().format());
const timeArray = [
  '16:30',
  '16:31',
  '16:32',
  '16:33',
  '16:34',
];

dispTime();

function dispTime() {
  var now = new moment();
  document.getElementById('time').innerHTML = now.format('HH:mm:ss');
}

function dingdong() {
  alert('キンコンカンコン');
}

function checkTime() {
  var now = new moment();
  now = now.format('HH:mm');
  if(timeArray.includes(now)) {
    dingdong();
  }
}

setInterval(function () {
  dispTime();
}, 1000);

setInterval(function () {
  checkTime();
}, 60000);
