const getSongList = document.getElementById("list_of_songs");

window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.tracklist);
      fetch(data.tracklist);
      // .then((resp) => resp.json())
      // .then((songs) => {
      //   console.log(songs);
      // });
    });
};
