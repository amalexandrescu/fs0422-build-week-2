const getSongList = document.getElementById("list_of_songs");

window.onload = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "43edf00e99mshe81faf3a369e73ap1a437ajsn69393cce9cd3",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/75621062", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.error(err));

  fetch(
    " https://deezerdevs-deezer.p.rapidapi.com/album/75621062/tracks",
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      const arrayOfSongs = data.data;
      arrayOfSongs.forEach((element, index) => {
        getSongList.innerHTML += `<div class="col d-flex">
        <span class="track_num align-self-center">${index + 1}</span>
        <div class="song_is">
          <span class="song_name">${element.title}</span>
          <div class="song_artist">${element.artist.name}</div>
        </div>
        <span class="ml-auto">${Math.floor(element.duration / 60)}:${
          element.duration % 60
        }</span>
      </div>
        `;
      });
    })
    .catch((err) => console.error(err));
};

// const fetchItems = async () => {
//   const arrayOfSongs;
// };
