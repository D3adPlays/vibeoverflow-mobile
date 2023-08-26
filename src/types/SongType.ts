import { Artist } from "./ArtistType";

export interface Song {
    isrc: string;
    name: string;
    cover: string;
    coverColor: string;
    duration: number;
    artists: Artist[];
    explicit: boolean;
}