### searchAudiobook

A Method that allows you to search an app by a given string

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

[Return back to main document](../README.md)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
