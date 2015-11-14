$(document).ready(function(){

//ADD SONGS TO DOM
  function addSongs(songList) {
    var songListItems = $();
    var artistDropDown = $();
    var albumDropDown = $();
    for (var i = 0; i < songList.songs.length; i++) {
      var currentSong = songList.songs[i];
          songListItems = songListItems.add(

            "<div class='songSection'><h2 class='song'>" + currentSong.title + "</h2><p class='artist'>Performed by " + currentSong.artist + "</p>" + "<p class='album'>On the album " + currentSong.album + "</p>" + "<button class='destroy'>Delete this Song</button></div>"
      );

    // Add to the DOM
    $("#songList").append(songListItems);

    // Populate Artist dropdown list with artist info
      artistDropDown = artistDropDown.add(
        "<option>" + currentSong.artist + "</option>"
        );

    // Add to the DOM
    $("#artistDrop").append(artistDropDown);

    // Populate Album dropdown list with album info
      albumDropDown = albumDropDown.add(
        "<option>" + currentSong.album + "</option>"
        );

    // Add to the DOM
    $("#albumDrop").append(albumDropDown);
    }
  }

//ADD MORE SONGS ON CLICK
  $("#get-more-music").click(function() {
    $.ajax({
      url:"javaScripts/moreSongs.json"
    }).done(addSongs);
  });

//THESE SONGS INITIALIZE ON LOAD
  $.ajax({
    url:"javaScripts/songs.json"
  }).done(addSongs);




// Hide parent element of button clicked.  This works on dynamically generated html by searching the documnet using the .on function then assigning an event handler to the target and executing the desired function.  There is a callback function within the hide function that will remove the element after the hide animation runs.
  $(document).on("click", ".destroy", function() {
      console.log("clicked");
      $(this).parent().hide('fast', function () {
        $(this).remove();
      });
  });
  //THE CODE BELOW WILL REMOVE FROM DOM
  // $("#songList").on("click", ".destroy", function() {
  //     console.log("clicked");
  //     $(this).parent().remove();
  // });
});

// LESSONS LEARNED: line 4 declares the function addSongs to populate the DOM with the key/values in the JSON file.  line 5 declares the variable which is an empty jquery string which will build up in the for loop on lines 6 through 11.  line 7 declares a variable currentSong which is each iteration of the JSON object songs.  The variable songListItems is updated in line 8 - 10.  it takes the empty jquery string and adds 1)  new div's each with their own specific class so that the objects within them can be deleted all at once...I wonder if the class name is even necessary since I are targeting each item for deletion by parent object...just deleted the class and it worked just fine.  I am going to leave it in for now because it was so much work...and I might want to use it later.  so...coming down to line 26 the problem I encountered was that the button is being created dynamically and on page load does not exist.  It is all located within the Div with the #songList so I needed to target the div that everything was being created to, and then add a dynamic event listener using .on() the event is "click" the only class that matters was the one we created on the button.  Because the remove is targeting the parent element and not a specific class the class name doesn't NOTE: CHANGED CODE SO LINE NUMBERS MIGHT HAVE CHANGED.