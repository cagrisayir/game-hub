export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	genres: Genre[];
	publishers: Publisher[];
	slug: string;
	background_image: string;
	description_raw: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface Publisher {
	id: number;
	name: string;
}

export interface Trailer {
	id: number;
	name: string;
	preview: string;
	data: { 480: string; max: string };
}
