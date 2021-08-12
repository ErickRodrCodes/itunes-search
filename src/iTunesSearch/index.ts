import axios from 'axios';

import { ReturnType } from "../typings/types";
import {
  IiTunesSearch,
  ISearchAllOptions
} from "./interfaces";

export class iTunesSearch implements IiTunesSearch {
  options = {} as ISearchAllOptions;
  defaultOptions = {
    limit: 1,
    country: "US",
    language: "en",
    attribute: null,
    entity: null
  } as ISearchAllOptions;

  private iTunesFetch = axios.create({
    baseURL: 'https://itunes.apple.com',
    timeout: 2000
  })

  searchAlbum = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "album" } })

  searchSong = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ media: "music" } })

  searchArtist = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "allArtist", attribute: "allArtistTerm" } })

  searchApp = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "software"} })

  searchMovie = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "movie"} })

  searchMusicVideo = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ media: "musicVideo"} })

  searchBook = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "ebook"} })

  searchAudiobook = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "audiobook"} })

  searchPodcast = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "podcast"} })

  searchAll = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options })

  private performSearch = async (term: string, options: ISearchAllOptions): Promise<ReturnType> => {
    try {
      const mergedOptions = { ...this.defaultOptions, ...options };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const searchObject: any = Object.fromEntries(Object.entries(mergedOptions).filter(([ _, value ]) => value !== null));
      const querystring = new URLSearchParams(searchObject);
      const { data } = await this.iTunesFetch.get(`/search?term=${encodeURI(term)}&${querystring.toString()}`);
      return data;
    } catch (e) {
      const useError: Error = e;
      const { message, name, stack } = useError;
      // eslint-disable-next-line no-console
      console.warn('Unexpected error while searching. Please see the log below.');
      // eslint-disable-next-line no-console
      console.warn({ message, name, stack });
      return {
        resultCount: 0,
        results: []
      };
    }
  }
}
