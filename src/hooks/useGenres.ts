import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Genre } from '../types';
import { CACHE_GENRE_KEY } from '../constants';
import apiClient from '../services/api-client';

const useGenres = () =>
	useQuery({
		queryKey: CACHE_GENRE_KEY,
		queryFn: () =>
			apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

export default useGenres;
