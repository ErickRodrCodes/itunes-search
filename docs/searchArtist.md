### searchArtist

A method that will allow you to search an Artist

#### Parameters

| Parameter  | Type   | Required | Description                                                     |
| ---------- | ------ | -------- | --------------------------------------------------------------- |
| searchTerm | string | ✅       | The search term used look for an artist that matches that value |
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
const { searchArtist } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchArtist('Juanes', {
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
  const { searchArtist } = iTunesSearch;
  const search = async () => {
    const result = await searchArtist('Juanes', {
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
      "wrapperType": "artist",
      "artistType": "Artist",
      "artistName": "Juanes",
      "artistLinkUrl": "https://music.apple.com/us/artist/juanes/103856?uo=4",
      "artistId": 103856,
      "amgArtistId": 451494,
      "primaryGenreName": "Pop Latino",
      "primaryGenreId": 1117
    },
    {
      "wrapperType": "artist",
      "artistType": "Software Artist",
      "artistName": "Cesar de Juanes Sanchez",
      "artistLinkUrl": "https://apps.apple.com/us/developer/cesar-de-juanes-sanchez/id1505971612?uo=4",
      "artistId": 1505971612
    },
    {
      "wrapperType": "artist",
      "artistType": "Artist",
      "artistName": "José Juanes",
      "artistLinkUrl": "https://music.apple.com/us/artist/jos%C3%A9-juanes/959515520?uo=4",
      "artistId": 959515520,
      "primaryGenreName": "Worldwide",
      "primaryGenreId": 19
    }
  ]
}
```

[Return back to main document](https://tbogard.github.io/itunes-search/)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
