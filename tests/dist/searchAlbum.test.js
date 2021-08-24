const nock = require('nock');

const { searchAlbum } = require('../../dist/index');
const scope = nock('https://itunes.apple.com');
const mockData = require('../mock-answers/searchAlbum.json');


describe('Search Album', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it("should return results for an album called 'Nemesis'", async () => {
    scope.get('/search')
      .query({
        term: 'Nemesis',
        limit: 3,
        country: 'US',
        language: 'en',
        entity:'album',
      })
      .reply(200, mockData);
    const result = await searchAlbum('Nemesis', {limit:3});
    expect(result.resultCount).toBe(3);
    expect(result.results).toHaveLength(3);
  });
  it("should not return results for an album called 'EXPERIMENTAL_TERM_OF_SEARCH'", async () => {
    scope.get('/search')
      .query({
        term: encodeURI('EXPERIMENTAL_TERM_OF_SEARCH'),
        limit: 3,
        country: 'US',
        language: 'en',
        entity:'album',
      })
      .reply(200, {
        "resultCount": 0,
        "results": []
      });
    const result = await searchAlbum('EXPERIMENTAL_TERM_OF_SEARCH', {limit:3});
    expect(result.resultCount).toBe(0);
    expect(result.results).toHaveLength(0);
  });
  describe("It validates if you're passing valid optional parameters", () => {
    it("should throw exception when term is not a string, or empty string", async () => {
      const exceptionMessage = 'A "term" is a string required on any search. "term" cannot have empty spaces as well.';
      await expect(searchAlbum('', { limit: 3 }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
      await expect(searchAlbum(null, { limit: 3 }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );

    });
    it('should throw exception when limit is not a number', async () => {
      const exceptionMessage = 'Optional argument "limit" must be a number. Passed string(test)';
      await expect(searchAlbum('Nemesis', { limit: "test" }))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })
    it('should throw exception when language code is invalid', async () => {
      const exceptionMessage = 'Optional argument "language" must be a string and should be a valid ISO 639-1 language code '
        + '(https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Passed string( "INVALID" )';
      await expect(searchAlbum('Nemesis', { language:'INVALID' }))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })

    it('should throw exception when country code is invalid', async () => {
      const exceptionMessage = 'Optional argument "country" must be a string and should be a valid ISO 3166-1 Alpha 2 country code '
        + '(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Passed string( "INVALID" )';
      await expect(searchAlbum('Nemesis', { country:'INVALID' }))
      .rejects
      .toHaveProperty(
        'message', exceptionMessage
      );
    })
  });
});
