
//CREATE VARIABLE TO STORE .getElementById
var songList = document.getElementById("mainContent")

//DECLARE EMPTY ARRAY
var songs = [];

//POPULATE ARRAY
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//ADD SONG TO BEGINNING OF ARRAY
songs.push("It's The End of The World As We Know It - by R.E.M. on the album Document");

//ADD SONG TO END OF ARRAY
songs.unshift("Vanderlyle Crybaby Geeks - by The National on the album High Violet")

//CREATE EMPTY VARIABLE TO STORE UPDATED SONGS AS STRING ITEMS TO DISPLAY IN DOM
var updatedSongs = "";

//RUN FOR LOOP TO REMOVE TARGETED CHARACTERS
for (var i= 0; i < songs.length; i++) {
  var currentSong = songs[i];
  currentSong = currentSong.replace(">", "-");
  currentSong = currentSong.replace(/[*@(!]/g, "");
  songs[i] = currentSong;
  updatedSongs += "<div>" + songs[i] + "</div>" //POPULATE EMPTY VARIABLE WITH UPDATED CONTENT
}

//LOG CHANGES TO SEE IF THEY WORKED
console.log(songs);


//WRITE STRINGS TO HTML
songList.innerHTML = updatedSongs;

//HOW DID I DO THIS? first step was to create a loop that would go through each element in the array and search each string for irregular characters.  Set up a loop, create a variable that takes the current instance of the array and stores it, make changes to that variable using the .replace method; store the updated version of the variable within itself.  set the instance of the song to the current status of the song, then repeat...Why does this Work? because it is not going through each item all at once, it is only going through the characters on the index of the array it is currently on.  The program takes songs[0] searches and replaces all illegal characters and then stores the new var in song[0]. After executing that code it goes to songs[1] so on and so forth until the loop is finished.  What I end up with is a new array with the same name filled with the edited content.//