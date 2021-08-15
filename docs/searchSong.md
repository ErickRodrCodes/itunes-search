### searchSong

A method that will allow you to search a Song

#### Parameters

| Parameter  | Type   | Required | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| searchTerm | string | ✅       | The search term used look for a song that matches that value |
| options    | object | 🔴       | Options used to parametrize the search                       |

<b>Options Object</b>

If you do not enter limit, lang or country values, the default language and country code are set to English. Limit Number default is 1.
Please Check [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) For Language and Country Codes.

| Key      | Type   | Required | Description                                                                                       | Default Value |
| -------- | ------ | -------- | ------------------------------------------------------------------------------------------------- | ------------- |
| limit    | number | ✅       | Required if options is defined. A Numeric value that sets the limit of results by the search term | 1             |
| language | string | 🔴       | a language code based on [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)             | "en"          |
| country  | string | 🔴       | a country code based on [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)              | "US"          |

## Example of use:

### Node

```js
const { searchSong } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchSong('Ordinary World - Duran Duran', {
    limit: 3,
  });
  console.log(result);
};
search();
```

### JS Browser

```html
<script src="itunesSearch.min.js"></script>
<script type="text/javascript">
  const { searchSong } = iTunesSearch;
  const search = async () => {
    const result = await searchSong('Ordinary World - Duran Duran', {
      limit: 3,
    });
    console.log(result);
  };
  search();
</script>
```

#### Expected answer

```json
{
  "resultCount": 3,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 487384,
      "collectionId": 696247010,
      "trackId": 696247422,
      "artistName": "Duran Duran",
      "collectionName": "Duran Duran (The Wedding Album)",
      "trackName": "Ordinary World",
      "collectionCensoredName": "Duran Duran (The Wedding Album)",
      "trackCensoredName": "Ordinary World",
      "artistViewUrl": "https://music.apple.com/us/artist/duran-duran/487384?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/ordinary-world/696247010?i=696247422&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/ordinary-world/696247010?i=696247422&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/79/8e/5a798e77-28cb-d1dd-b7ca-827d32e75a78/mzaf_12921270147858871715.plus.aac.p.m4a",
      "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/67/dc/cc/67dccc7e-2988-7a56-777d-b788ecf4d487/source/30x30bb.jpg",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/67/dc/cc/67dccc7e-2988-7a56-777d-b788ecf4d487/source/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/67/dc/cc/67dccc7e-2988-7a56-777d-b788ecf4d487/source/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "1993-02-11T08:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 13,
      "trackNumber": 2,
      "trackTimeMillis": 340200,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop",
      "isStreamable": true
    },
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 487384,
      "collectionId": 693602046,
      "trackId": 693602520,
      "artistName": "Duran Duran",
      "collectionName": "Greatest",
      "trackName": "Ordinary World",
      "collectionCensoredName": "Greatest",
      "trackCensoredName": "Ordinary World",
      "artistViewUrl": "https://music.apple.com/us/artist/duran-duran/487384?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/ordinary-world/693602046?i=693602520&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/ordinary-world/693602046?i=693602520&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c7/ea/87/c7ea8732-4416-9f5c-6ddb-c94a1cd6ea2b/mzaf_8665470121722723342.plus.aac.p.m4a",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/2f/1d/47/2f1d47dc-7952-3dec-5cad-4c354ce79607/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/2f/1d/47/2f1d47dc-7952-3dec-5cad-4c354ce79607/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/2f/1d/47/2f1d47dc-7952-3dec-5cad-4c354ce79607/source/100x100bb.jpg",
      "collectionPrice": 11.99,
      "trackPrice": 1.29,
      "releaseDate": "1998-11-03T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 19,
      "trackNumber": 4,
      "trackTimeMillis": 277760,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Alternative",
      "isStreamable": true
    },
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 487384,
      "collectionId": 716374900,
      "trackId": 716376461,
      "artistName": "Duran Duran",
      "collectionName": "NOW That's What I Call the 90's",
      "trackName": "Ordinary World",
      "collectionCensoredName": "NOW That's What I Call the 90's",
      "trackCensoredName": "Ordinary World",
      "collectionArtistId": 4035426,
      "collectionArtistName": "Various Artists",
      "artistViewUrl": "https://music.apple.com/us/artist/duran-duran/487384?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/ordinary-world/716374900?i=716376461&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/ordinary-world/716374900?i=716376461&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview62/v4/43/82/3c/43823c67-2c26-6472-bbce-ca48b12e7f6e/mzaf_7638943305265166988.plus.aac.p.m4a",
      "artworkUrl30": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/9f/99/07/9f990707-cf0c-9275-334d-a4d0f5522d2c/source/30x30bb.jpg",
      "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/9f/99/07/9f990707-cf0c-9275-334d-a4d0f5522d2c/source/60x60bb.jpg",
      "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/9f/99/07/9f990707-cf0c-9275-334d-a4d0f5522d2c/source/100x100bb.jpg",
      "collectionPrice": 34.99,
      "trackPrice": -1,
      "releaseDate": "1993-02-11T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 70,
      "trackNumber": 35,
      "trackTimeMillis": 340427,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop",
      "isStreamable": false
    }
  ]
}
```

[Return back to main document](../README.md)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
