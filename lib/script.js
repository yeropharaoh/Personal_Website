'use strict';

var Typed = require('typed.js');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static(__dirname + '/'));

// var typed = new Typed('.element', {
//   strings: ["First sentence.", "Second sentence."],
//   typeSpeed: 30
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings',
//     typeSpeed: 20,
//     backSpeed: 20,
//     startDelay: 1000,
//     loop: false,
//     loopCount: Infinity,
//   });
// });

// var typed = new Typed('.element', {
//   strings: ["First sentence.", "Second sentence."],
//   typeSpeed: 30
// });