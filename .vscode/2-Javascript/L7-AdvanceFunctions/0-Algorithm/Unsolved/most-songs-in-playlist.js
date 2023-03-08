// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {

  let totalMin = 0;
  let totalSongs = 0;


  for (let song of arr.sort()) {
    if (totalMin + song <= 60) {
      totalMin += song;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }
  return totalSongs;
};
