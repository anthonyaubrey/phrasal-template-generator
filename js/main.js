Let’s make a story together!
var colour = prompt('A colour (orange, indigo, etc.)');

var creature = prompt('A creature (dragon, moth, etc.)');

var adjective = prompt('An adjective (beautiful, super, etc.)');

var verb = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like? Enter the letter below:\na) Snacking\nb) Escaping\nc) Winning');

var storyA = function () {
  document.write('After snacking on' + adjective + 'treats, the' + colour + 'bellied' + creature + ' ' + verbed + 'for hours.');
};

var storyB = function () {
  document.write('Ameilia' + verbed + 'through the' + adjective + ' ' + colour + 'nebula escaping the space' + creature + '.');
};

var storyC = function () {
  document.write('Jackson chose his' + adjective + ',' + colour + ' ' + creature + 'card and' + verbed + 'it to the table knowing he won.');
};

if (story == 'a' || story == 'A') {
  storyA();
} else if (story == 'b' || story == 'B') {
  storyB();
} else if (story == 'c' || story == 'C') {
  storyC();
} else {
  document.write('You are no fun.');
};
