### searchBook

A Method that allows you to search a book by a given string

#### Parameters

| Parameter  | Type   | Required | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| searchTerm | string | ✅       | The search term used look for a book that matches that value |
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
const { searchBook } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchBook('javascript', {
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
  const { searchBook } = iTunesSearch;
  const search = async () => {
    const result = await searchBook('javascript', {
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
      "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Publication122/v4/a7/e8/92/a7e892da-c8f7-46ee-4b9d-e31ce0b39132/source/60x60bb.jpg",
      "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Publication122/v4/a7/e8/92/a7e892da-c8f7-46ee-4b9d-e31ce0b39132/source/100x100bb.jpg",
      "artistViewUrl": "https://books.apple.com/us/artist/gilad-e-tsur-mayer/1146379526?uo=4",
      "trackCensoredName": "JavaScript",
      "fileSizeBytes": 114084,
      "formattedPrice": "Free",
      "trackViewUrl": "https://books.apple.com/us/book/javascript/id1194112162?uo=4",
      "artistIds": [1146379526],
      "genreIds": ["10017", "38", "9027"],
      "releaseDate": "2017-01-04T08:00:00Z",
      "trackId": 1194112162,
      "trackName": "JavaScript",
      "kind": "ebook",
      "currency": "USD",
      "description": "Hey Guys!<br />Welcome to the Javascript Awesomeness Book, where you will learn to write the basics of Javascript, the awesome way!<br />My name is Gilad, and I will lead you through this amazing course!<br />I began my career as a web developer, but soon transitioned to entrepreneurship, where I founded my very own startup company.<br />Currently, I work at the company I founded from scratch, doing what I love most - teaching you guys!<br />I designed this book for anyone seeking to learn basic of Javascript and begin a career as a rockstar web developer, as well as anybody who just loves to expand their knowledge.<br />By the end of the book, you will have a rock solid knowledge of all Javascript building blocks such as:<br />●Javascript Variables<br />●Javascript Functions<br />●Javascript If Statement<br />●Javascript Form Validation<br />●And many many more…<br />I will teach you the latest version of Javascript by the standards of the W3C Association. These standards are used by all the major companies in the world.<br />I will not only cover all these topics, but I will also give you an opportunity to practice them by giving you a pop quiz every now and then.<br />The ideal student for this course is anybody who wants to expand their knowledge of Javascript or get a leg up in the web developer world.<br />To take this Book, you will have to know the basics of HTML and CSS, and also come open-minded to my silly jokes!<br />You are free to take a look at the course description, and I look forward to meeting you inside.",
      "artistId": 1146379526,
      "artistName": "Gilad E Tsur-Mayer",
      "genres": ["Computers", "Books", "Computers & Internet"],
      "price": 0,
      "averageUserRating": 3.5,
      "userRatingCount": 35
    }
  ]
}
```

[Return back to main document](../README.md)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
