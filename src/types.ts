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
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}
