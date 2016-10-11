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
    if (letter !== " " && isNaN(letter)) {
      debugger;
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
