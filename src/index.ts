import { iTunesSearch as _iTunesSearch } from "./iTunesSearch/index";
const iTunesSearch = new _iTunesSearch();
export const {
  searchAlbum,
  searchArtist,
  searchAll,
  searchApp,
  searchAudiobook,
  searchBook,
  searchMovie,
  searchMusicVideo,
  searchPodcast,
  searchSong
} = iTunesSearch;
