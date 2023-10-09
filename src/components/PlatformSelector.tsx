import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	const { gameQuery, setPlatformId } = useGameQueryStore();
	const selectedPlatform = usePlatform(gameQuery.platformId);

	if (error) return null;
	return (
		<Menu>
			<MenuButton paddingLeft='10px' as={Button} rightIcon={<BsChevronDown />}>
				{gameQuery.platformId ? selectedPlatform?.name : 'Platform'}
			</MenuButton>
			<MenuList>
				{data?.results.map(platform => (
					<MenuItem
						key={platform.id}
						onClick={() => setPlatformId(platform.id)}
					>
						<Text>{platform.name}</Text>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
