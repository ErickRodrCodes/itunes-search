### searchPodcast

A Method that allows you to search a podcast by a given string

#### Parameters

| Parameter  | Type   | Required | Description                                                     |
| ---------- | ------ | -------- | --------------------------------------------------------------- |
| searchTerm | string | ✅       | The search term used look for a podcast that matches that value |
| options    | object | 🔴       | Options used to parametrize the search                          |

<b>Options Object</b>

If you do not enter limit, lang or country values, the default language and country code are set to English. Limit Number default is 1.
Please Check [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) For Language and Country Codes.

| Key      | Type   | Required | Description                                                                                       | Default Value |
| -------- | ------ | -------- | ------------------------------------------------------------------------------------------------- | ------------- |
| limit    | number | ✅       | Required if options is defined. A Numeric value that sets the limit of results by the search term | 1             |
| language | string | 🔴       | a language code based on [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)       | "en"          |
| country  | string | 🔴       | a country code based on [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)              | "US"          |

## Example of use:

### Node

```js
const { searchPodcast } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchPodcast('no frillz');
  console.log(result);
};
search();
```

### JS Browser

```html
<script src="itunesSearch.min.js"></script>
<script type="text/javascript">
  const { searchPodcast } = iTunesSearch;
  const search = async () => {
    const result = await searchPodcast('no frillz');
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
      "kind": "podcast",
      "collectionId": 1452125553,
      "trackId": 1452125553,
      "artistName": "IFC Yipes and Chris Matrix",
      "collectionName": "No Frillz Podcast with Yipes & Matrix",
      "trackName": "No Frillz Podcast with Yipes & Matrix",
      "collectionCensoredName": "No Frillz Podcast with Yipes & Matrix",
      "trackCensoredName": "No Frillz Podcast with Yipes & Matrix",
      "collectionViewUrl": "https://podcasts.apple.com/us/podcast/no-frillz-podcast-with-yipes-matrix/id1452125553?uo=4",
      "feedUrl": "https://nofrillz.libsyn.com/rss",
      "trackViewUrl": "https://podcasts.apple.com/us/podcast/no-frillz-podcast-with-yipes-matrix/id1452125553?uo=4",
      "artworkUrl30": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/94/7f/8d/947f8dbd-edb6-4b87-1752-db45e3cc77c3/mza_14963549509693329370.jpg/30x30bb.jpg",
      "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/94/7f/8d/947f8dbd-edb6-4b87-1752-db45e3cc77c3/mza_14963549509693329370.jpg/60x60bb.jpg",
      "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/94/7f/8d/947f8dbd-edb6-4b87-1752-db45e3cc77c3/mza_14963549509693329370.jpg/100x100bb.jpg",
      "collectionPrice": 0,
      "trackPrice": 0,
      "trackRentalPrice": 0,
      "collectionHdPrice": 0,
      "trackHdPrice": 0,
      "trackHdRentalPrice": 0,
      "releaseDate": "2020-05-18T18:30:00Z",
      "collectionExplicitness": "cleaned",
      "trackExplicitness": "cleaned",
      "trackCount": 46,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Video Games",
      "contentAdvisoryRating": "Clean",
      "artworkUrl600": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/94/7f/8d/947f8dbd-edb6-4b87-1752-db45e3cc77c3/mza_14963549509693329370.jpg/600x600bb.jpg",
      "genreIds": ["1509", "26", "1502"],
      "genres": ["Video Games", "Podcasts", "Leisure"]
    }
  ]
}
```

[Return back to main document](https://tbogard.github.io/itunes-search/)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
