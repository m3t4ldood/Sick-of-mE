// Define an object to store songs and their lyrics
var songLyrics = {};

// Function to store song lyrics
function storeLyrics(songTitle, lyricsText) {
  songLyrics[songTitle] = lyricsText;
}

// Function to display stored lyrics
function displayLyrics() {
  var lyricsContainer = document.getElementById('lyricsContainer');
  var html = '';
  
  for (var songTitle in songLyrics) {
    html += '<h1>' + songTitle + '</h1>';
    html += '<p>' + songLyrics[songTitle] + '</p>';
  }
  
  lyricsContainer.innerHTML = html;
}

// Store lyrics for "am I dead yet"
storeLyrics("am I dead yet", `
the sickness inside me
my bodys trying to fight me
my demise is unlikely
cus i know i wont hold on...

i am feeling faint
my blood is the paint
on the walls in my mind
and their running dry...

#my suicide is like insanity 
(am i dead yet?)
every time i cave 
it takes apart of me
(am i dead yet?)
i try to numb the pain
every day
(am i dead yet?)
but all i can do is fall down yelling
make this go away...

i cant let the blood hit the floor
if i do i will be no more
i feel like such a whore
cus i give into this lie...

i take it all in stride
as i swallow my pride
wishing that i had died
cus my life is so untrue...

#my whole life is nothing
but insanity
(are you dead yet?)
whys it so hard dealing 
with inhumanity
(are you dead yet?)
i cant help these thoughts in my head
a nessecity
(are you dead yet?)
if i dont fix myself
and get out of this hell 
it will be the end of me...
its a means to get by...

been laying here for days
my lonelyness is not a phase
with all these things i regret
am i dead yet?...
`);

// Add more songs and their lyrics here...

// Display stored lyrics
displayLyrics();
