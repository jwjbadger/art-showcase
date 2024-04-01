import artworks from '../data/projects.json';
import Masonry from 'react-responsive-masonry';

const Artwork = (props) => {
	return (
		<>
			<Masonry columnsCount={3} gutter={4}>
				{artworks.projects.map((artwork) => (
					<img src={artwork.URL} />
				))}
			</Masonry>
		</>
	);
};

export default Artwork;
