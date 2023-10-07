import { useQuery } from '@tanstack/react-query';
import useData, { FetchResponse } from './useData';
import { CACHE_GENRE_KEY } from '../constants';
import apiClient from '../services/api-client';

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: CACHE_GENRE_KEY,
		queryFn: () =>
			apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

export default useGenres;
