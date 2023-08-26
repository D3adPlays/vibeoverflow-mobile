import { MMKV } from 'react-native-mmkv'

//CONSTANT KEY

export const keyUsername: string = "user.name";
export const tidalToken: string = "user.tokens.tidal";
export const spotifyToken: string = "user.tokens.tidal";
export const soundcloudToken: string = "user.tokens.tidal";

export const storage = new MMKV()