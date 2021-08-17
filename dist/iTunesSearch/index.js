"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iTunesSearch = void 0;
const axios_1 = __importDefault(require("axios"));
class iTunesSearch {
    constructor() {
        this.options = {};
        this.defaultOptions = {
            limit: 1,
            country: "US",
            language: "en",
            attribute: null,
            entity: null
        };
        this.iTunesFetch = axios_1.default.create({
            baseURL: 'https://itunes.apple.com',
            timeout: 2000
        });
        this.searchAlbum = async (term, options) => await this.performSearch(term, { ...options, ...{ entity: "album" } });
        this.searchSong = async (term, options) => await this.performSearch(term, { ...options, ...{ media: "music" } });
        this.searchArtist = async (term, options) => await this.performSearch(term, { ...options, ...{ entity: "allArtist", attribute: "allArtistTerm" } });
        this.searchApp = async (term, options) => await this.performSearch(term, { ...options, ...{ entity: "software" } });
        this.searchMovie = async (term, options) => await this.performSearch(term, { ...options, ...{ entity: "movie" } });
        this.searchMusicVideo = async (term, options) => await this.performSearch(term, { ...options, ...{ media: "musicVideo" } });
        this.searchBook = async (term, options) => await this.performSearch(term, { ...options, ...{ entity: "ebook" } });
        this.searchAudiobook = async (term, options) => await this.performSearch(term, { ...options, ...{ entity: "audiobook" } });
        this.searchPodcast = async (term, options) => await this.performSearch(term, { ...options, ...{ entity: "podcast" } });
        this.searchAll = async (term, options) => await this.performSearch(term, { ...options });
        this.performSearch = async (term, options) => {
            try {
                const mergedOptions = { ...this.defaultOptions, ...options };
                const searchObject = Object.fromEntries(Object.entries(mergedOptions).filter(([_, value]) => value !== null));
                const querystring = new URLSearchParams(searchObject);
                const { data } = await this.iTunesFetch.get(`/search?term=${encodeURI(term)}&${querystring.toString()}`);
                return data;
            }
            catch (e) {
                throw new Error(e);
            }
        };
    }
}
exports.iTunesSearch = iTunesSearch;
//# sourceMappingURL=index.js.map