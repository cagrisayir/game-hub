import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<>
			<Navbar />
			<Box padding={5}>
				<Heading>OOPS!</Heading>
				<Text>
					{isRouteErrorResponse(error)
						? 'This page is not exist'
						: 'Unexpected Error occured.'}
				</Text>
			</Box>
		</>
	);
};

export default ErrorPage;
