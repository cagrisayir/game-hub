import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;
	return (
		<Menu>
			<MenuButton paddingLeft='10px' as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform ? selectedPlatform.name : 'Platform'}
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
