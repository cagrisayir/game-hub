import axios, { AxiosRequestConfig } from 'axios';
import { FetchResponse } from '../types';

const axiosInstant = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'b49112e07e3547f2814cb562d6644032', // normally I store it in .env file
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstant
			.get<FetchResponse<T>>(this.endpoint, config)
			.then(res => res.data);
	};
}

export default APIClient;
