import { useLoaderData } from 'react-router-dom';
import Masonry from 'react-responsive-masonry';

const ArtworkLoader = async () => {
	const art = await fetch('https://joesph.kreatesomething.dev/api/projects/');
	return art.json();
};

const Artwork = (props) => {
	const artworks = useLoaderData().map((e) => e.URL);

	return (
		<>
			<div>
				<Masonry columnsCount={2} gutter={5}>
					{artworks.map((artwork) => (
						<img src={artwork} />
					))}
				</Masonry>
			</div>
		</>
	);
};

export default Artwork;
export { ArtworkLoader };
