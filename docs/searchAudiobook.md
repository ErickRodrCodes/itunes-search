### searchAudiobook

A Method that allows you to search an Audiobook in the iTunes store by a given string

#### Parameters

| Parameter  | Type   | Required | Description                                                        |
| ---------- | ------ | -------- | ------------------------------------------------------------------ |
| searchTerm | string | ✅       | The search term used look for an audiobook that matches that value |
| options    | object | 🔴       | Options used to parametrize the search                             |

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
const { searchAudiobook } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchAudiobook('javascript');
  console.log(JSON.stringify(result, null, 2));
};
search();
```

### JS Browser

```html
<script src="itunesSearch.min.js"></script>
<script type="text/javascript">
  const { searchAudiobook } = iTunesSearch;
  const search = async () => {
    const result = await searchAudiobook('javascript');
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
      "wrapperType": "audiobook",
      "artistId": 733074428,
      "collectionId": 963229276,
      "artistName": "Troy Dimes",
      "collectionName": "JavaScript: A Guide to Learning the JavaScript Programming Language (Unabridged)",
      "collectionCensoredName": "JavaScript: A Guide to Learning the JavaScript Programming Language (Unabridged)",
      "artistViewUrl": "https://books.apple.com/us/author/troy-dimes/id733074428?uo=4",
      "collectionViewUrl": "https://books.apple.com/us/audiobook/javascript-a-guide-to-learning-the/id963229276?uo=4",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music3/v4/e2/21/34/e221344e-3aa5-7ae5-98c3-4166486dfd5c/itunes.jpg/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music3/v4/e2/21/34/e221344e-3aa5-7ae5-98c3-4166486dfd5c/itunes.jpg/100x100bb.jpg",
      "collectionPrice": 5.99,
      "collectionExplicitness": "notExplicit",
      "trackCount": 1,
      "copyright": "© 2015 Troy Dimes",
      "country": "USA",
      "currency": "USD",
      "releaseDate": "2015-01-30T08:00:00Z",
      "primaryGenreName": "Self-Development",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/12/a8/7f/12a87fe8-6481-f65a-3dd7-041ed501d14f/mzaf_5195015865377973701.std.aac.p.m4a",
      "description": "JavaScript is a dynamic computer programming language that is commonly used in web browsers to control the behavior of web pages and interact with users. It allows for asynchronous communication and can update parts of a web page or even replace the entire content of a web page. You'll see JavaScript being used to display date and time information, perform animations on a web site, validate form input, suggest results as a user types into a search box, and more. <br /><br />JavaScript is being used more and more... <br /><br />Even though JavaScript is by far the most popular client side programming language in use today, it can and is used on the server side
as well. Node.js, Meteor, Wakanda, CouchDB, and MongoDB are just a few examples of where you'll find and be able to use JavaScript on the server side. The time you invest in learning JavaScript can be doubly rewarding as JavaScript keeps moving into more and more areas of computing. <br /><br />Learn the fundamentals of the JavaScript programming language. <br /><br />No matter if you plan to use JavaScript on the client side in a web browser, on the server side, or both, you will need to learn the fundamentals of the language. That's what this book will give you. When you finish reading this book you will feel comfortable and confident programming in the JavaScript language. <br /><br />Here is just some of what you'll learn when you read this book:  \n \n \n Where JavaScript can be used  \n How to setup your computer so it's easy and comfortable to program in JavaScript  \n What tools you'll want to have when programming in JavaScript  \n The basics of HTML...  \n What variables are and how to use them  \n How to deal with numbers and perform mathematical operations  \n How and when to use conditionals  \n What functions are, why they are so handy, and how to put them to good use  \n Advanced data structures like associati"
    }
  ]
}
```

[Return back to main document](/itunes-search/)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
