import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
	Heading,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const { setGenreId, gameQuery } = useGameQueryStore();

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading marginBottom={3} fontSize='2xl'>
				Genres
			</Heading>
			<List>
				{data?.results.map(genre => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace='normal'
								textAlign='left'
								fontWeight={genre.id === gameQuery.genreId ? 'bold' : 'normal'}
								onClick={() => {
									setGenreId(genre.id);
								}}
								variant='link'
								fontSize={'lg'}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
