export interface SearchResponce {
	artists: Artists;
	albums: Albums;
	playlists: Playlists;
	tracks: Tracks;
	videos: Videos;
	topHit: TopHit;
}

export interface Albums {
	limit: number;
	offset: number;
	totalNumberOfItems: number;
	items: Value[];
}

export interface Value {
	id: number;
	title: string;
	duration: number;
	streamReady: boolean;
	adSupportedStreamReady: boolean;
	streamStartDate: string;
	allowStreaming: boolean;
	premiumStreamingOnly: boolean;
	numberOfTracks: number;
	numberOfVideos: number;
	numberOfVolumes: number;
	releaseDate: Date;
	copyright: string;
	type: string;
	version: null;
	url: string;
	cover: string;
	vibrantColor: string;
	videoCover: string;
	explicit: boolean;
	upc: string;
	popularity: number;
	audioQuality: string;
	audioModes: string[];
	mediaMetadata: MediaMetadata;
	artists: Artist[];
}

export interface Artist {
	id: number;
	name: string;
	type: string;
	picture: string;
}

export interface MediaMetadata {
	tags: string[];
}

export interface Artists {
	limit: number;
	offset: number;
	totalNumberOfItems: number;
	items: ArtistsItem[];
}

export interface ArtistsItem {
	id: number;
	name: string;
	artistTypes: string[];
	url: string;
	picture: string;
	popularity: number;
	artistRoles: ArtistRole[];
	mixes: CreatorClass;
}

export interface ArtistRole {
	categoryId: number;
	category: string;
}

export interface CreatorClass {}

export interface Playlists {
	limit: number;
	offset: number;
	totalNumberOfItems: number;
	items: PlaylistsItem[];
}

export interface PlaylistsItem {
	uuid: string;
	title: string;
	numberOfTracks: number;
	numberOfVideos: number;
	creator: CreatorClass;
	description: string;
	duration: number;
	lastUpdated: string;
	created: string;
	type: string;
	publicPlaylist: boolean;
	url: string;
	image: string;
	popularity: number;
	squareImage: string;
	promotedArtists: Artist[];
	lastItemAddedAt: string;
}

export interface TopHit {
	value: Value;
	type: string;
}

export interface Tracks {
	limit: number;
	offset: number;
	totalNumberOfItems: number;
	items: TracksItem[];
}

export interface TracksItem {
	id: number;
	title: string;
	duration: number;
	replayGain: number;
	peak: number;
	allowStreaming: boolean;
	streamReady: boolean;
	adSupportedStreamReady: boolean;
	streamStartDate: string;
	premiumStreamingOnly: boolean;
	trackNumber: number;
	volumeNumber: number;
	version: null;
	popularity: number;
	copyright: string;
	url: string;
	isrc: string;
	editable: boolean;
	explicit: boolean;
	audioQuality: string;
	audioModes: string[];
	mediaMetadata: MediaMetadata;
	artists: Artist[];
	album: Album;
	mixes: PurpleMixes;
}

export interface Album {
	id: number;
	title: string;
	cover: string;
	vibrantColor: string;
	videoCover: null;
	releaseDate: Date;
}

export interface PurpleMixes {
	TRACK_MIX: string;
}

export interface Videos {
	limit: number;
	offset: number;
	totalNumberOfItems: number;
	items: VideosItem[];
}

export interface VideosItem {
	id: number;
	title: string;
	volumeNumber: number;
	trackNumber: number;
	releaseDate: string;
	imagePath: null;
	imageId: string;
	vibrantColor: string;
	duration: number;
	quality: string;
	streamReady: boolean;
	adSupportedStreamReady: boolean;
	streamStartDate: string;
	allowStreaming: boolean;
	explicit: boolean;
	popularity: number;
	type: string;
	adsUrl: null;
	adsPrePaywallOnly: boolean;
	artists: Artist[];
	album: null;
}
