/* eslint-disable max-len */
import nock from 'nock';

import { searchPodcast } from '../../src/index';
import mockData from  '../mock-answers/searchPodcast.json';
const scope = nock('https://itunes.apple.com');

describe('search Podcast', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it("should return results for a podcast with the keyword 'cbs news'", async () => {
    scope.get('/search?term=cbs%20news&limit=1&country=US&language=en&entity=podcast')
      .reply(200, mockData);
    const result = await searchPodcast('cbs news');
    expect(result.resultCount).toBe(1);
    expect(result.results).toHaveLength(1);
  });
  it("should not return results for a podcast with the keyword 'EXPERIMENTAL_TERM_OF_SEARCH'", async () => {
    scope.get('/search?term=EXPERIMENTAL_TERM_OF_SEARCH&limit=1&country=US&language=en&entity=podcast')
      .reply(200, {
        "resultCount": 0,
        "results": []
      });
    const result = await searchPodcast('EXPERIMENTAL_TERM_OF_SEARCH');
    expect(result.resultCount).toBe(0);
    expect(result.results).toHaveLength(0);
  });

  describe("it validates if you're passing valid optional parameters", () => {

    it('should throw exception when language code is invalid', async () => {
      const exceptionMessage = 'Optional argument "language" must be a string and should be a valid ISO 639-1 language code '
        + '(https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Passed string( "INVALID" )';
      await expect(searchPodcast('cbs news', { language:'INVALID' }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });

    it('should throw exception when country code is invalid', async () => {
      const exceptionMessage = 'Optional argument "country" must be a string and should be a valid ISO 3166-1 Alpha 2 country code '
        + '(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Passed string( "INVALID" )';
      await expect(searchPodcast('cbs news', { country:'INVALID' }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });
  });
});