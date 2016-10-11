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
