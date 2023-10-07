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
import { Platform } from '../types';
import usePlatform from '../hooks/usePlatform';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error } = usePlatforms();
	const selectedPlatform = usePlatform(selectedPlatformId);

	if (error) return null;
	return (
		<Menu>
			<MenuButton paddingLeft='10px' as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatformId ? selectedPlatform?.name : 'Platform'}
			</MenuButton>
			<MenuList>
				{data?.results.map(platform => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatform(platform)}
					>
						<Text>{platform.name}</Text>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
