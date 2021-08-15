### searchAll

A Method that allows you to search an app by a given string

#### Parameters

| Parameter  | Type   | Required | Description                                                   |
| ---------- | ------ | -------- | ------------------------------------------------------------- |
| searchTerm | string | ✅       | The search term used look for anything that matches that term |
| options    | object | ✅       | Options used to parametrize the search                        |

<b>Options Object</b>

If you do not enter limit, lang or country values, the default language and country code are set to English. Limit Number default is 1.
Please Check [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) For Language and Country Codes.

| Key       | Type   | Required                      | Description                                                                                                                                                                                                                          | Default Value |
| --------- | ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| limit     | number | ✅                            | A Numeric value that sets the limit of results by the search term                                                                                                                                                                    | 1             |
| entity    | string | 🟡 if you need more precision | The type of results you want returned, relative to the specified media type. For example: movieArtist for a movie media type search. Check the list of Entities                                                                      |               |
| attribute | string | 🟡 if you need more precision | The attribute you want to search for in the stores, relative to the specified media type. For example, if you want to search for an artist by name specify `entity=allArtist&attribute=allArtistTerm.` Check the list of Attributes. |               |
| language  | string | 🔴                            | a language code based on [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)                                                                                                                                                | "en"          |
| country   | string | 🔴                            | a country code based on [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)                                                                                                                                                 | "US"          |

##### Entities for each media type

| Entity     | Values                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| movie      | movieArtist, movie                                                                                                                          |
| podcast    | podcastAuthor, podcast                                                                                                                      |
| music      | musicArtist, musicTrack, album, musicVideo, mix, song <br> <b>Note</b>: "musicTrack" can include both songs and music videos in the results |
| musicVideo | musicArtist, musicVideo                                                                                                                     |
| audiobook  | audiobookAuthor, audiobook                                                                                                                  |
| shortFilm  | shortFilmArtist, shortFilm                                                                                                                  |
| tvShow     | tvEpisode, tvSeason                                                                                                                         |
| software   | software, iPadSoftware, macSoftware                                                                                                         |
| ebook      | ebook                                                                                                                                       |
| all        | movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack                                                            |

##### Attributes for each media type

| Attribute  | Values                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| movie      | actorTerm, genreIndex, artistTerm, shortFilmTerm, producerTerm, ratingTerm, directorTerm, releaseYearTerm, featureFilmTerm, movieArtistTerm, movieTerm, ratingIndex, descriptionTerm                                                                                                                                                                    |
| podcast    | titleTerm, languageTerm, authorTerm, genreIndex, artistTerm, ratingIndex, keywordsTerm, descriptionTerm                                                                                                                                                                                                                                                 |
| music      | mixTerm, genreIndex, artistTerm, composerTerm, albumTerm, ratingIndex, songTerm                                                                                                                                                                                                                                                                         |
| musicVideo | genreIndex, artistTerm, albumTerm, ratingIndex, songTerm                                                                                                                                                                                                                                                                                                |
| audiobook  | titleTerm, authorTerm, genreIndex, ratingIndex                                                                                                                                                                                                                                                                                                          |
| shortFilm  | genreIndex, artistTerm, shortFilmTerm, ratingIndex, descriptionTerm                                                                                                                                                                                                                                                                                     |
| software   | softwareDeveloper                                                                                                                                                                                                                                                                                                                                       |
| tvShow     | genreIndex, tvEpisodeTerm, showTerm, tvSeasonTerm, ratingIndex, descriptionTerm                                                                                                                                                                                                                                                                         |
| all        | actorTerm, languageTerm, allArtistTerm, tvEpisodeTerm, shortFilmTerm, directorTerm, releaseYearTerm, titleTerm, featureFilmTerm, ratingIndex, keywordsTerm, descriptionTerm, authorTerm, genreIndex, mixTerm, allTrackTerm, artistTerm, composerTerm, tvSeasonTerm, producerTerm, ratingTerm, songTerm, movieArtistTerm, showTerm, movieTerm, albumTerm |

## Example of use:

### Node

```js
const { searchAll } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchAll('Hikaru Utada', {
    limit: 3,
    entity: 'allArtist',
    attribute: 'allArtistTerm',
  });
  console.log(JSON.stringify(result, null, 2));
};
search();
```

### JS Browser

```html
<script src="itunesSearch.min.js"></script>
<script type="text/javascript">
  const { searchAll } = iTunesSearch;
  const search = async () => {
    const result = await searchAll('Hikaru Utada', {
      limit: 3,
      entity: 'allArtist',
      attribute: 'allArtistTerm',
    });
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
      "wrapperType": "artist",
      "artistType": "Artist",
      "artistName": "Hikaru Utada",
      "artistLinkUrl": "https://music.apple.com/us/artist/hikaru-utada/18756224?uo=4",
      "artistId": 18756224,
      "amgArtistId": 765200,
      "primaryGenreName": "J-Pop",
      "primaryGenreId": 27
    }
  ]
}
```

**Note**: Combinations of Entity/Attribute can make even more precise search results.

[Return back to main document](../README.md)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
