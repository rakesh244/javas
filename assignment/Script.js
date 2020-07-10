
 ( function() {
var names = ["Rakesh", "Jeevan", "Jen", "Jason", "Praveen", "Faruk", "Lokesh", "Pawan", "Lucky", "Jadeja"];

for (var itr in names) {
  var charAtBegining = null;
   charAtBegining = names[itr].charAt(0);

  if (charAtBegining.toLowerCase() == 'j') {
    byeSpeaker.speak(names[itr]);
  } else {
    helloSpeaker.speak(names[itr]);
  }
}
 })();