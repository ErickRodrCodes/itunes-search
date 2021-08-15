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
const { searchSong } = require('@sop/itunes-search');
const search = async () => {
  const result = await searchSong('La Camisa Negra - Juanes');
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
    const result = await searchSong('La Camisa Negra - Juanes');
    console.log(result);
  };
  search();
</script>
```

#### Expected answer

```json
{
  "resultCount": 1,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 103856,
      "collectionId": 1445885800,
      "trackId": 1445886064,
      "artistName": "Juanes",
      "collectionName": "Tr3s Presents Juanes MTV Unplugged (Deluxe Edition)",
      "trackName": "La Camisa Negra",
      "collectionCensoredName": "Tr3s Presents Juanes MTV Unplugged (Deluxe Edition)",
      "trackCensoredName": "La Camisa Negra (MTV Unplugged)",
      "artistViewUrl": "https://music.apple.com/us/artist/juanes/103856?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/la-camisa-negra-mtv-unplugged/1445885800?i=1445886064&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/la-camisa-negra-mtv-unplugged/1445885800?i=1445886064&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/44/bb/0d/44bb0daa-fc7a-868f-390c-1772b898c350/mzaf_11033594278729293277.plus.aac.p.m4a",
      "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1a/c3/ca/1ac3ca18-3dd6-a7c1-5eac-05ed9cd7dacc/source/30x30bb.jpg",
      "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1a/c3/ca/1ac3ca18-3dd6-a7c1-5eac-05ed9cd7dacc/source/60x60bb.jpg",
      "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1a/c3/ca/1ac3ca18-3dd6-a7c1-5eac-05ed9cd7dacc/source/100x100bb.jpg",
      "collectionPrice": 11.99,
      "trackPrice": 1.29,
      "releaseDate": "2012-05-29T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 14,
      "trackNumber": 9,
      "trackTimeMillis": 225965,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop Latino",
      "isStreamable": true
    }
  ]
}
```

[Return back to main document](../README.md)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
