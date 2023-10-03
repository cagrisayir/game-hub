import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'b49112e07e3547f2814cb562d6644032',
	},
});
