### searchMovie

A Method that allows you to search a movie by a given string

#### Parameters

| Parameter  | Type   | Required | Description                                                   |
| ---------- | ------ | -------- | ------------------------------------------------------------- |
| searchTerm | string | ✅       | The search term used look for a movie that matches that value |
| options    | object | 🔴       | Options used to parametrize the search                        |

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
const { searchMovie } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchMovie('Deadpool', {
    limit: 3,
  });
  console.log(result);
};
search();
```

### JS Browser

```html
<script src="itunesSearch.min.js"></script>
<script type="text/DeadPool">
  const { searchMovie } = iTunesSearch;
  const search = async () => {
    const result = await searchMovie('Deadpool', {
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
  "resultCount": 1,
  "results": [
    {
      "wrapperType": "track",
      "kind": "feature-movie",
      "collectionId": 1404489349,
      "trackId": 1078111961,
      "artistName": "Tim Miller",
      "collectionName": "Deadpool 2-Movie Collection",
      "trackName": "Deadpool",
      "collectionCensoredName": "Deadpool 2-Movie Collection",
      "trackCensoredName": "Deadpool",
      "collectionArtistId": 345346894,
      "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/20th-century-fox-film/345346894?uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/movie/deadpool/id1078111961?uo=4",
      "trackViewUrl": "https://itunes.apple.com/us/movie/deadpool/id1078111961?uo=4",
      "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/ee/77/0b/ee770b8b-dc3b-423a-c695-fab7f47d5b0c/mzvf_6207691253036919622.640x354.h264lc.U.p.m4v",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Video4/v4/69/97/72/69977202-baa8-227d-26eb-18eddcc6c3f2/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Video4/v4/69/97/72/69977202-baa8-227d-26eb-18eddcc6c3f2/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Video4/v4/69/97/72/69977202-baa8-227d-26eb-18eddcc6c3f2/source/100x100bb.jpg",
      "collectionPrice": 29.99,
      "trackPrice": 14.99,
      "trackRentalPrice": 3.99,
      "collectionHdPrice": 29.99,
      "trackHdPrice": 14.99,
      "trackHdRentalPrice": 3.99,
      "releaseDate": "2016-02-12T08:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 2,
      "trackNumber": 1,
      "trackTimeMillis": 6521638,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Action & Adventure",
      "contentAdvisoryRating": "R",
      "shortDescription": "Based upon Marvel Comics’ most unconventional anti-hero, DEADPOOL tells the origin story of former",
      "longDescription": "Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other \"actors,\" DEADPOOL is a giddy slice of awesomeness packed with more
twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!",
      "hasITunesExtras": true
    }
  ]
}
```

[Return back to main document](/itunes-search/)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
