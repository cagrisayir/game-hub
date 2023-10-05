import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton paddingLeft='10px' as={Button} rightIcon={<BsChevronDown />}>
				Order By: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date Added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average rating</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
