import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Platform } from '../types';

const usePlatforms = () =>
	useQuery({
		queryKey: ['platform'],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Platform>>('/platforms/lists/parents')
				.then(res => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

export default usePlatforms;
