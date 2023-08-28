import { SetStateAction } from 'react';
import { Album, SearchResponce } from '../interfaces/SearchResponce';

export const ApiURL: string = 'https://api.tidalhifi.com/v1/';
export const ResourceApiURL: string = 'https://resources.tidal.com/';

const token: string =
	'eyJraWQiOiJ2OU1GbFhqWSIsImFsZyI6IkVTMjU2In0.eyJ0eXBlIjoibzJfYWNjZXNzIiwidWlkIjoxOTE5MDIzNzQsInNjb3BlIjoid19zdWIgcl91c3Igd191c3IiLCJnVmVyIjowLCJzVmVyIjowLCJjaWQiOjMyMzUsImV4cCI6MTY5Mzc3NzA0OSwic2lkIjoiNmM0MDkyNDUtNDgwYS00MWI1LTljMWEtODA0ZDBmYzUyYTE5IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnRpZGFsLmNvbS92MSJ9.aKT_MwujRO9CuizLnBiunJaqDqE08EY2xCRpe2hU3Ch3gtMUlSfzyIsk6FiaTOdR3znKTL0w5agCI9WjMPr0LQ'; //TODO Replace this with user storage solution

function fancyTimeFormat(duration: number) {
	// Hours, minutes and seconds
	const hrs = ~~(duration / 3600);
	const mins = ~~((duration % 3600) / 60);
	const secs = ~~duration % 60;

	// Output like "1:01" or "4:03:59" or "123:03:59"
	let ret = '';

	if (hrs > 0) {
		ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
	}

	ret += '' + mins + ':' + (secs < 10 ? '0' : '');
	ret += '' + secs;

	return ret;
}

//https://api.tidalhifi.com/v1/search?countryCode=US&query=damso&offset=0&types=ARTISTS,ALBUMS,TRACKS,VIDEOS,PLAYLISTS&limit=30
export async function search(search: string) {
	if (search == '' || search == ' ') return [];
	const header: Headers = new Headers({
		'Cache-Control': 'no-cache',
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		'User-Agent':
			'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)',
	});
	let responce: any = await fetch(
		ApiURL +
			`search?countryCode=US&query=${encodeURI(
				search
			)}&offset=0&types=ARTISTS,ALBUMS,TRACKS,VIDEOS,PLAYLISTS&limit=20`,
		{
			method: 'GET',
			headers: header,
		}
	).then((responce) => responce.json());
	let searchResponce: SearchResponce = responce;
	let toReturn: {
		name: string;
		cover_url: string;
		artists: string;
		track_url: string;
		time: string;
	}[] = [];
	searchResponce.tracks.items.forEach((item) => {
		let artists = '';
		item.artists.forEach((artist) => {
			if (artists.length < 30) {
				if (artists === '') {
					artists = artist.name;
				} else {
					artists += `, ${artist.name}`;
				}
			} else {
				if (!artists.endsWith('and others...')) {
					artists += ' and others...';
				}
			}
		});

		toReturn.push({
			name: item.title,
			cover_url: getAlbumCover(item.album),
			artists: artists,
			track_url: item.url,
			time: fancyTimeFormat(item.duration),
		});
	});
	return toReturn;
}

//https://resources.tidal.com/images/2be75467/1049/4098/9938/41556af4b1d8/320x320.jpg
export function getAlbumCover(album: Album, imageSize: number = 320): string {
	return (
		ResourceApiURL +
		`images/${album.cover.replaceAll(
			'-',
			'/'
		)}/${imageSize}x${imageSize}.jpg`
	);
}
