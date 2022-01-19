import nock from 'nock';

import { searchAll } from '../../src/index';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
const scope = nock('https://itunes.apple.com');

const requestURL = '/search?term=Hikaru%20Utada&limit=1&country=US&language=en&attribute=allArtistTerm&entity=allArtist';

describe('Handling of network Errors', () => {
  beforeEach(() => {
    nock.disableNetConnect();


  });

  afterEach(() => {
    nock.enableNetConnect();

  });

  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(null), 3000)); // avoid jest open handle error
  });

  it('should return an exception when the server times out (NOT THE QUERY)', async () => {
    jest.setTimeout(2000);
    const mock = new MockAdapter(axios);
    scope.get(requestURL)
        .delay(1000)
        .reply(200, {});

    mock.onGet(requestURL).networkError();

    await expect(searchAll('Hikaru Utada', {
      limit: 1,
      attribute: "allArtistTerm",
      entity: "allArtist",
    }))
    .rejects
    .toThrow(
      'Network Disconnected'
    );
    mock.restore();
  });

  it('should return an exception when the connection is timed out and is Aborted', async () => {
    jest.setTimeout(2000);
    const mock = new MockAdapter(axios);
    scope.get(requestURL)
      .delay(1000)
      .replyWithError({code: 'ECONNABORTED'});

    mock.onGet(requestURL).timeout();

    await expect(searchAll('Hikaru Utada', {
      limit: 1,
      attribute: "allArtistTerm",
      entity: "allArtist",
    }))
    .rejects
    .toThrow(
      'Error: ECONNABORTED. Reference: https://www.ibm.com/docs/en/zos/2.2.0?topic=codes-sockets-return-errnos'
    );
    mock.restore();
  });

  it('should return an exception when the query times out after 500 milliseconds', async () => {
    jest.setTimeout(2000);
    scope.get(requestURL)
      .delayConnection(1000)
      .replyWithError('error');

    await expect(searchAll('Hikaru Utada', {
      limit: 1,
      attribute: "allArtistTerm",
      entity: "allArtist",
      timeout: 500
    }))
    .rejects
    .toThrow(
      'Error: ECONNABORTED. Reference: https://www.ibm.com/docs/en/zos/2.2.0?topic=codes-sockets-return-errnos'
    );
  });
})
