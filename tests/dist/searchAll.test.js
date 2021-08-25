const nock = require('nock');

const { searchAll } = require('../../dist/index');
const scope = nock('https://itunes.apple.com');
const mockData = require( '../mock-answers/searchAll.json');

describe('Search All', () => {
  beforeEach(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.enableNetConnect();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should return results for an serch with a keyterm "Hikaru Utada", entity "allArtist" and attribute "allArtistTerm"', async () => {
    scope.get('/search?term=Hikaru%20Utada&limit=1&country=US&language=en&attribute=allArtistTerm&entity=allArtist')
      .reply(200, mockData);
    const result = await searchAll('Hikaru Utada', {limit:1, attribute:"allArtistTerm", entity:"allArtist"});
    expect(result.resultCount).toBe(1);
    expect(result.results).toHaveLength(1);
    expect(result.results[0]).toEqual({
      "wrapperType": "artist",
      "artistType": "Artist",
      "artistName": "Hikaru Utada",
      "artistLinkUrl": "https://music.apple.com/us/artist/hikaru-utada/18756224?uo=4",
      "artistId": 18756224,
      "amgArtistId": 765200,
      "primaryGenreName": "J-Pop",
      "primaryGenreId": 27
    });
  });
  it("should not return results for an keyterm 'EXPERIMENTAL_TERM_OF_SEARCH'", async () => {
    scope.get('/search')
      .query({
        term: encodeURI('EXPERIMENTAL_TERM_OF_SEARCH'),
        limit: 1,
        country: 'US',
        language: 'en',
        entity: 'allArtist',
        attribute: 'allArtistTerm'
      })
      .reply(200, {
        "resultCount": 0,
        "results": []
      });
    const result = await searchAll('EXPERIMENTAL_TERM_OF_SEARCH', {limit:1, attribute:"allArtistTerm", entity:"allArtist"});
    expect(result.resultCount).toBe(0);
    expect(result.results).toHaveLength(0);
  });
  describe("it validates if you're passing valid optional parameters", () => {
    it("should throw exception when term is not a string, or empty string", async () => {
      const exceptionMessage = 'A "term" is a string required on any search. "term" cannot have empty spaces as well.';
      await expect(searchAll('', {limit:1, attribute:"allArtistTerm", entity:"allArtist"}))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
      await expect(searchAll(null, {limit:1, attribute:"allArtistTerm", entity:"allArtist"}))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );

    });
    it('should throw exception when limit is not a number', async () => {
      const exceptionMessage = 'Optional argument "limit" must be a number. Passed string(test)';
      await expect(searchAll('Hikaru Utada', {limit:"test", attribute:"allArtistTerm", entity:"allArtist"}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })
    it('should throw exception when language code is invalid', async () => {
      const exceptionMessage = 'Optional argument "language" must be a string and should be a valid ISO 639-1 language code '
        + '(https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Passed string( "INVALID" )';
      await expect(searchAll('Hikaru Utada', { limit: 1, attribute: "allArtistTerm", entity: "allArtist", language:"INVALID"}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })

    it('should throw exception when country code is invalid', async () => {
      const exceptionMessage = 'Optional argument "country" must be a string and should be a valid ISO 3166-1 Alpha 2 country code '
        + '(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Passed string( "INVALID" )';
      await expect(searchAll('Hikaru Utada', {limit:1, attribute:"allArtistTerm", entity:"allArtist",country:"INVALID"}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })

    it('should throw exception when attribute and entity are both missing on the options object', async () => {
      const exceptionMessage = 'searchAll expects to have both "entity" and "attribute" values in the options object';
      await expect(searchAll('Hikaru Utada', {limit:1}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })

    it('should throw exception when attribute is set but not entity on the options object', async () => {
      const exceptionMessage = 'searchAll expects to have both "entity" and "attribute" values in the options object';
      await expect(searchAll('Hikaru Utada', {limit:1, attribute:"allArtistTerm"}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })
    it('should throw exception when entity is set but not attribute on the options object', async () => {
      const exceptionMessage = 'searchAll expects to have both "entity" and "attribute" values in the options object';
      await expect(searchAll('Hikaru Utada', {limit:1, entity:"allArtist"}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })
    it('should throw exception when entity has an invalid value', async () => {
      const exceptionMessage = 'The entity with value "INVALID" is not valid. Expected one of the following list '
        + '["album","allArtist","allTrack","audiobook","audiobookAuthor","ebook","iPadSoftware","macSoftware","mix",'
        + '"movie","movieArtist","musicArtist","musicTrack","musicVideo","podcast","podcastAuthor","shortFilm","shortFilmArtist",'
      + '"software","song","tvEpisode","tvSeason"]';
      await expect(searchAll('Hikaru Utada', {limit:1, entity:"INVALID", attribute:"allArtistTerm"}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })

    it('should throw exception when attribute has an invalid value', async () => {
      const exceptionMessage = 'The attribute with value "INVALID" is not valid. Expected one of the following list '
        + '["actorTerm","albumTerm","allArtistTerm","allTrackTerm","artistTerm","authorTerm","composerTerm","descriptionTerm",'
        + '"directorTerm","featureFilmTerm","genreIndex","keywordsTerm","languageTerm","mixTerm","movieArtistTerm","movieTerm",'
        + '"producerTerm","ratingIndex","ratingTerm","releaseYearTerm","shortFilmTerm","showTerm","softwareDeveloper","songTerm",'
      + '"titleTerm","tvEpisodeTerm","tvSeasonTerm"]';
      await expect(searchAll('Hikaru Utada', {limit:1, attribute:"INVALID", entity:"allArtist"}))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })
  });
});
