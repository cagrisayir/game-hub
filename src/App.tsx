import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import gameQueryStore from './store';

function App() {
	const {} = gameQueryStore();

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
					<Navbar />
				</GridItem>
				<Show above='lg'>
					<GridItem area={'aside'} paddingX={5}>
						<GenreList />
					</GridItem>
				</Show>
				<GridItem area={'main'}>
					<HStack spacing={5} paddingLeft={3} marginBottom={5}>
						<PlatformSelector />
						<SortSelector />
						<GameHeading />
					</HStack>
					<GameGrid />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
