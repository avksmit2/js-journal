(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body.toUpperCase();
}

Entry.prototype.wordCount = function() {
  var output = this.body.split(" ");
  return output.length;
};

Entry.prototype.consonantCount = function() {
  var vowels = ["A", "E", "I", "O", "U"];
  var consonantCount = 0;
  var entryLetters = this.body.split("");

  entryLetters.forEach(function(letter) {
    if (letter !== " " && letter.match(/[a-z]/i)) {
      if (vowels.indexOf(letter) === -1) {
        consonantCount++;
      }
    }
  });
  return consonantCount;
};

Entry.prototype.vowelCount = function() {
  var vowels = ["A", "E", "I", "O", "U"];
  var vowelCount = 0;
  var entryLetters = this.body.split("");

  entryLetters.forEach(function(letter) {
    if (letter !== " ") {
      if (vowels.indexOf(letter) !== -1) {
        vowelCount++;
      }
    }
  });
  return vowelCount;
};

Entry.prototype.getTeaser = function() {

};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Entry(title, body);
    $('.word-num').text(newJournal.wordCount());
    $('.vowel-num').text(newJournal.vowelCount());
    $('.consonant-num').text(newJournal.consonantCount());
  });
});

$(document).ready(function() {
  $('#numbers').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal(title, body);
  });
});

},{"./../js/journal.js":1}]},{},[2]);
