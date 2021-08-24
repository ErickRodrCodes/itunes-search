/* eslint-disable max-len */
import nock from 'nock';

import { searchApp } from '../../src/index';
import mockData from  '../mock-answers/searchApp.json';
const scope = nock('https://itunes.apple.com');

describe('search App', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it("should return results for an App called 'Captain Tsubasa Dream Team'", async () => {
    scope.get('/search?term=Captain%20Tsubasa%20Dream%20Team&limit=1&country=US&language=en&entity=software')
      .reply(200, mockData);
    const result = await searchApp('Captain Tsubasa Dream Team', {limit:1});
    expect(result.resultCount).toBe(1);
    expect(result.results).toHaveLength(1);
  });
  it("should not return results for an App called 'EXPERIMENTAL_TERM_OF_SEARCH'", async () => {
    scope.get('/search?term=EXPERIMENTAL_TERM_OF_SEARCH&limit=1&country=US&language=en&entity=software')
      .reply(200, {
        "resultCount": 0,
        "results": []
      });
    const result = await searchApp('EXPERIMENTAL_TERM_OF_SEARCH', {limit:1});
    expect(result.resultCount).toBe(0);
    expect(result.results).toHaveLength(0);
  });

  describe("it validates if you're passing valid optional parameters", () => {

    it('should throw exception when language code is invalid', async () => {
      const exceptionMessage = 'Optional argument "language" must be a string and should be a valid ISO 639-1 language code '
        + '(https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Passed string( "INVALID" )';
      await expect(searchApp('Captain Tsubasa Dream Team', { language:'INVALID' }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });

    it('should throw exception when country code is invalid', async () => {
      const exceptionMessage = 'Optional argument "country" must be a string and should be a valid ISO 3166-1 Alpha 2 country code '
        + '(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Passed string( "INVALID" )';
      await expect(searchApp('Captain Tsubasa Dream Team', { country:'INVALID' }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });
  });
});
