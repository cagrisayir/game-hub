import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
};

const theme = extendTheme({
	config,
	colors: {
		gray: {
			50: '#E5E5E5',
			100: '#DBDBDB',
			200: '#C6C6C6',
			300: '#B2B2B2',
			400: '#9D9D9D',
			500: '#898989',
			600: '#6D6D6D',
			700: '#515151',
			800: '#353535',
			900: '#111',
		},
	},
});

export default theme;
