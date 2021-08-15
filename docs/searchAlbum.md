# searchAlbum

A method that will allow you to search an Album

## Parameters

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
const { searchAlbum } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchAlbum('La Camisa Negra - Juanes');
  console.log(JSON.stringify(result, null, 2));
};
search();
```

### JS Browser

```html
<script src="itunesSearch.min.js"></script>
<script type="text/javascript">
  const { searchAlbum } = iTunesSearch;
  const search = async () => {
    const result = await searchAlbum('La Camisa Negra - Juanes');
    console.log(JSON.stringify(result, null, 2));
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
      "wrapperType": "collection",
      "collectionType": "Album",
      "artistId": 103856,
      "collectionId": 1480441949,
      "amgArtistId": 451494,
      "artistName": "Juanes",
      "collectionName": "La Camisa Negra - Single",
      "collectionCensoredName": "La Camisa Negra - Single",
      "artistViewUrl": "https://music.apple.com/us/artist/juanes/103856?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/la-camisa-negra-single/1480441949?uo=4",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/f9/b8/c9/f9b8c9a9-b478-c541-7e2a-344da74f59ff/source/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/f9/b8/c9/f9b8c9a9-b478-c541-7e2a-344da74f59ff/source/100x100bb.jpg",
      "collectionPrice": 3.99,
      "collectionExplicitness": "notExplicit",
      "trackCount": 4,
      "copyright": "℗ 2005 UMG Recordings, Inc.",
      "country": "USA",
      "currency": "USD",
      "releaseDate": "2005-06-13T07:00:00Z",
      "primaryGenreName": "Latin"
    }
  ]
}
```

[Return back to main document](../README.md)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
