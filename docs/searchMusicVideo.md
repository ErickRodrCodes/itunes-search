### searchMusicVideo

A method that will allow you to search a music video

#### Parameters

| Parameter  | Type   | Required | Description                                                         |
| ---------- | ------ | -------- | ------------------------------------------------------------------- |
| searchTerm | string | ✅       | The search term used look for a music video that matches that value |
| options    | object | 🔴       | Options used to parametrize the search                              |

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
const { searchMusicVideo } = require('@sop/itunes-search');
const search = async () => {
  const result = await searchMusicVideo('ordinary world', {
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
  const { searchMusicVideo } = iTunesSearch;
  const search = async () => {
    const result = await searchMusicVideo('ordinary world', {
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
      "kind": "music-video",
      "artistId": 214135551,
      "trackId": 379115536,
      "artistName": "Red",
      "trackName": "Ordinary World",
      "trackCensoredName": "Ordinary World",
      "artistViewUrl": "https://music.apple.com/us/artist/red/214135551?uo=4",
      "trackViewUrl": "https://music.apple.com/us/music-video/ordinary-world/379115536?uo=4",
      "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video125/v4/18/dd/4e/18dd4ecc-2e2f-cd36-5d5e-6de507decdad/mzvf_982521798193666446.640x480.h264lc.U.p.m4v",
      "artworkUrl30": "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/72/92/3f/72923f59-7d9e-67ae-e810-f71a458bed97/source/30x30bb.jpg",
      "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/72/92/3f/72923f59-7d9e-67ae-e810-f71a458bed97/source/60x60bb.jpg",
      "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/72/92/3f/72923f59-7d9e-67ae-e810-f71a458bed97/source/100x100bb.jpg",
      "collectionPrice": 0.99,
      "trackPrice": 0.99,
      "releaseDate": "2010-07-06T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "trackTimeMillis": 265278,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Rock"
    },
    {
      "wrapperType": "track",
      "kind": "music-video",
      "artistId": 487384,
      "trackId": 1061352870,
      "artistName": "Duran Duran",
      "trackName": "Ordinary World",
      "trackCensoredName": "Ordinary World",
      "artistViewUrl": "https://music.apple.com/us/artist/duran-duran/487384?uo=4",
      "trackViewUrl": "https://music.apple.com/us/music-video/ordinary-world/1061352870?uo=4",
      "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video115/v4/84/e3/8b/84e38bad-bafa-b698-13a2-9113c4b8c563/mzvf_5065829719021050269.640x480.h264lc.U.p.m4v",
      "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Video62/v4/57/fc/3f/57fc3fa8-76e3-11fa-ee4e-0ec625211f20/source/30x30bb.jpg",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Video62/v4/57/fc/3f/57fc3fa8-76e3-11fa-ee4e-0ec625211f20/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Video62/v4/57/fc/3f/57fc3fa8-76e3-11fa-ee4e-0ec625211f20/source/100x100bb.jpg",
      "collectionPrice": 1.99,
      "trackPrice": 1.99,
      "releaseDate": "1993-01-26T08:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "trackTimeMillis": 281448,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop"
    },
    {
      "wrapperType": "track",
      "kind": "music-video",
      "artistId": 315862101,
      "trackId": 396226683,
      "artistName": "Emmerson Nogueira",
      "trackName": "Ordinary World",
      "trackCensoredName": "Ordinary World (Ao Vivo)",
      "artistViewUrl": "https://music.apple.com/us/artist/emmerson-nogueira/315862101?uo=4",
      "trackViewUrl": "https://music.apple.com/us/music-video/ordinary-world-ao-vivo/396226683?uo=4",
      "previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/67/58/94/67589435-3747-c1e8-04c9-631d89eee2da/mzvf_4509996065674661943.640x344.h264lc.U.p.m4v",
      "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Video/v4/46/d8/bc/46d8bc2e-97e7-f38a-d29a-cb99c96858e8/source/30x30bb.jpg",
      "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Video/v4/46/d8/bc/46d8bc2e-97e7-f38a-d29a-cb99c96858e8/source/60x60bb.jpg",
      "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Video/v4/46/d8/bc/46d8bc2e-97e7-f38a-d29a-cb99c96858e8/source/100x100bb.jpg",
      "collectionPrice": 1.99,
      "trackPrice": 1.99,
      "releaseDate": "2011-10-10T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "trackTimeMillis": 299070,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Pop"
    }
  ]
}
```

[Return back to main document](../README.md)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
