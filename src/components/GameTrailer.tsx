import useTrailers from '../hooks/useTrailers';

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, error, isLoading } = useTrailers(gameId);
	if (isLoading) return <div>Loading...</div>;
	if (error) throw error;

	const first = data?.results[0];
	if (!first) return <div>No trailer found</div>;

	return first ? (
		<video src={first.data[480]} poster={first.preview} controls></video>
	) : (
		<div>No trailer found</div>
	);
};

export default GameTrailer;
