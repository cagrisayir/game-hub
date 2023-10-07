import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import { Platform } from './types';

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<div className='App'>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: '1fr',
					lg: '200px 1fr',
				}}
			>
				<GridItem area={'nav'}>
					<Navbar
						onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
					/>
				</GridItem>
				<Show above='lg'>
					<GridItem area={'aside'} paddingX={5}>
						<GenreList
							onSelectGenre={genre =>
								setGameQuery({ ...gameQuery, genreId: genre.id })
							}
							selectedGenreId={gameQuery.genreId}
						/>
					</GridItem>
				</Show>
				<GridItem area={'main'}>
					<HStack spacing={5} paddingLeft={3} marginBottom={5}>
						<PlatformSelector
							onSelectPlatform={platform =>
								setGameQuery({ ...gameQuery, platformId: platform.id })
							}
							selectedPlatformId={gameQuery.platformId}
						/>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={sortOrder =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
						<GameHeading gameQuery={gameQuery} />
					</HStack>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
