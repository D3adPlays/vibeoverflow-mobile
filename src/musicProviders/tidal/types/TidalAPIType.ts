import { Song } from "../../../types/SongType";

export class TidalAPI {
    constructor (
        public ApiURL: string = "https://api.tidalhifi.com/v1/"
    ){}
}