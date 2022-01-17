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
    country: 'US',
    language: 'en',
    attribute: null,
    entity: null,
    timeout: 2000
  } as ISearchAllOptions;

  searchAlbum = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "album" } }, "searchAlbum")

  searchSong = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ media: "music" } }, "searchSong")

  searchArtist = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "allArtist", attribute: "allArtistTerm" } }, "searchArtist")

  searchApp = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "software"} }, "searchApp")

  searchMovie = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "movie"} }, "searchMovie")

  searchMusicVideo = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ media: "musicVideo"} }, "searchMusicVideo")

  searchBook = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "ebook"} }, "searchBook")

  searchAudiobook = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "audiobook"} }, "searchAudiobook")

  searchPodcast = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options, ...{ entity: "podcast"} }, "searchPodcast")

  searchAll = async (term: string, options?: ISearchAllOptions): Promise<ReturnType> =>
    await this.performSearch(term, { ...options }, "searchAll")

  private performSearch = async (term: string, options: ISearchAllOptions, validate:string): Promise<ReturnType> => {
    const searchObject: any = this.validate(term, options, validate);
    // eslint-disable-next-line no-useless-catch
    try {
      const iTunesFetch = axios.create({
        baseURL: 'https://itunes.apple.com',
        timeout: searchObject?.timeout || 2000
      });
      if (searchObject.timeout) delete searchObject.timeout;

      const querystring = new URLSearchParams(searchObject);
      const searchQueryStr = `/search?term=${encodeURI(term)}&${querystring.toString()}`;
      const { data } = await iTunesFetch.get(searchQueryStr);
      return data;
    } catch (e) {
      throw e;
    }
  }

  private validate(term:string, options:ISearchAllOptions, validate:string): ReturnType {

    //cleaning up nulls
    const newOptions:any = Object.fromEntries(
      Object.entries({ ...this.defaultOptions, ...options })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([ _, value ]) => value !== null)
    );

    // eslint-disable-next-line max-len
    const isoCountry = new RegExp(/^(AD|AE|AF|AG|AI|AL|AM|AO|AQ|AR|AS|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BJ|BL|BM|BN|BO|BQ|BR|BS|BT|BV|BW|BY|BZ|CA|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|CR|CU|CV|CW|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EE|EG|EH|ER|ES|ET|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|IO|IQ|IR|IS|IT|JE|JM|JO|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MF|MG|MH|MK|ML|MM|MN|MO|MP|MQ|MR|MS|MT|MU|MV|MW|MX|MY|MZ|NA|NC|NE|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|SS|ST|SV|SX|SY|SZ|TC|TD|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TR|TT|TV|TW|TZ|UA|UG|UM|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|YE|YT|ZA|ZM|ZW)$/, "g");

    // eslint-disable-next-line max-len
    const isoLanguage = new RegExp(/^(ab|aa|af|ak|sq|am|ar|an|hy|as|av|ae|ay|az|bm|ba|eu|be|bn|bi|bs|br|bg|my|ca|ch|ce|ny|zh|cv|kw|co|cr|hr|cs|da|dv|nl|dz|en|eo|et|ee|fo|fj|fi|fr|ff|gl|ka|de|el|gn|gu|ht|ha|he|hz|hi|ho|hu|ia|id|ie|ga|ig|ik|io|is|it|iu|ja|jv|kl|kn|kr|ks|kk|km|ki|rw|ky|kv|kg|ko|ku|kj|la|lb|lg|li|ln|lo|lt|lu|lv|gv|mk|mg|ms|ml|mt|mi|mr|mh|mn|na|nv|nd|ne|ng|nb|nn|no|ii|nr|oc|oj|cu|om|or|os|pa|pi|fa|pl|ps|pt|qu|rm|rn|ro|ru|sa|sc|sd|se|sm|sg|sr|gd|sn|si|sk|sl|so|st|es|su|sw|ss|sv|ta|te|tg|th|ti|bo|tk|tl|tn|to|tr|ts|tt|tw|ty|ug|uk|ur|uz|ve|vi|vo|wa|cy|wo|fy|xh|yi|yo|za|zu)$/, "g");

    const entityList: any[] = [
      "album",
      "allArtist",
      "allTrack",
      "audiobook",
      "audiobookAuthor",
      "ebook",
      "iPadSoftware",
      "macSoftware",
      "mix",
      "movie",
      "movieArtist",
      "musicArtist",
      "musicTrack",
      "musicVideo",
      "podcast",
      "podcastAuthor",
      "shortFilm",
      "shortFilmArtist",
      "software",
      "song",
      "tvEpisode",
      "tvSeason",
    ];

    const attributeList: any[] = [
      "actorTerm",
      "albumTerm",
      "allArtistTerm",
      "allTrackTerm",
      "artistTerm",
      "authorTerm",
      "composerTerm",
      "descriptionTerm",
      "directorTerm",
      "featureFilmTerm",
      "genreIndex",
      "keywordsTerm",
      "languageTerm",
      "mixTerm",
      "movieArtistTerm",
      "movieTerm",
      "producerTerm",
      "ratingIndex",
      "ratingTerm",
      "releaseYearTerm",
      "shortFilmTerm",
      "showTerm",
      "softwareDeveloper",
      "songTerm",
      "titleTerm",
      "tvEpisodeTerm",
      "tvSeasonTerm",
    ];

    if (validate === 'searchAll') {
      if (newOptions.entity && !entityList.includes(newOptions.entity))
        throw new TypeError(`The entity with value ${JSON.stringify(newOptions.entity)} is not valid.`
          + ` Expected one of the following list ${JSON.stringify(entityList)}`);

      if (newOptions.attribute && !attributeList.includes(newOptions.attribute))
        throw new TypeError(`The attribute with value ${JSON.stringify(newOptions.attribute)} is not valid.`
          + ` Expected one of the following list ${JSON.stringify(attributeList)}`);

      if (!newOptions.entity || !newOptions.attribute)
        throw new TypeError('searchAll expects to have both "entity" and "attribute" values in the options object');
    }

    if (typeof term !== "string" || !term.trim().length)
      throw new TypeError('A "term" is a string required on any search. "term" cannot have empty spaces as well.');

    if (!Number.isInteger(newOptions.limit))
      throw new TypeError(`Optional argument "limit" must be a number`
        +`. Passed ${ typeof newOptions.limit }(${ newOptions.limit })`);

    if (!isoCountry.test(newOptions.country as string))
      throw new TypeError(
        `Optional argument "country" must be a string and should be a valid ISO 3166-1 `
        +`Alpha 2 country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). `
        +`Passed ${ typeof newOptions.country }( ${ JSON.stringify(newOptions.country) } )`
      );

    if (!isoLanguage.test(newOptions.language as string))
      throw new TypeError(
        `Optional argument "language" must be a string and should be a valid ISO 639-1`
        + ` language code (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). `
        +`Passed ${ typeof newOptions.language }( ${ JSON.stringify(newOptions.language) } )`
      );

    return newOptions;
  }
}
