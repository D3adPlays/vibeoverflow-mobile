import { SetStateAction } from 'react';
import { SearchResponce } from '../interfaces/SearchResponce';

export const ApiURL: string = 'https://api.tidalhifi.com/v1/';

//https://api.tidalhifi.com/v1/search?countryCode=US&query=damso&offset=0&types=ARTISTS,ALBUMS,TRACKS,VIDEOS,PLAYLISTS&limit=30
export async function search(search: string) {
	const token: string =
		'eyJraWQiOiJ2OU1GbFhqWSIsImFsZyI6IkVTMjU2In0.eyJ0eXBlIjoibzJfYWNjZXNzIiwidWlkIjoxOTE5MDIzNzQsInNjb3BlIjoid19zdWIgcl91c3Igd191c3IiLCJnVmVyIjowLCJzVmVyIjowLCJjaWQiOjMyMzUsImV4cCI6MTY5Mzc3NzA0OSwic2lkIjoiNmM0MDkyNDUtNDgwYS00MWI1LTljMWEtODA0ZDBmYzUyYTE5IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnRpZGFsLmNvbS92MSJ9.aKT_MwujRO9CuizLnBiunJaqDqE08EY2xCRpe2hU3Ch3gtMUlSfzyIsk6FiaTOdR3znKTL0w5agCI9WjMPr0LQ'; //TODO Replace this with user storage solution
	const header: Headers = new Headers({
		'Cache-Control': 'no-cache',
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
	});
	let responce: any = await fetch(
		ApiURL +
			`search?countryCode=US&query=${encodeURI(
				search
			)}&offset=0&types=ARTISTS,ALBUMS,TRACKS,VIDEOS,PLAYLISTS&limit=1`,
		{
			method: 'GET',
			headers: header,
		}
	).then((responce) => responce.json());
	let searchResponce: SearchResponce = responce;
	console.log(search);
	searchResponce.tracks.items.forEach((item) => {
		console.log(item.id);
	});
	return responce;
}
