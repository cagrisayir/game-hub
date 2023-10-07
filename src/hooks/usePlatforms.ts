import { useQuery } from '@tanstack/react-query';
import { Platform } from '../types';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
	useQuery({
		queryKey: ['platform'],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

export default usePlatforms;
