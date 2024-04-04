import { useLoaderData } from 'react-router-dom';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import ProgressiveImage from 'react-progressive-graceful-image';
import { useState } from 'react';

const ArtworkLoader = async () => {
	const art = await fetch('https://joesph.kreatesomething.dev/api/projects/');
	return art.json();
};

const Artwork = (props) => {
	let artworks = useLoaderData().map((e) => e.URL);
	const [hasMore, setHasMore] = useState(true);
	const [elements, setElements] = useState(Array.from(Array(4).keys()));

	const loadMore = () =>
		setTimeout(() => {
			let remaining = artworks.length - elements.length;
			if (remaining === 0) {
				if (hasMore === true) setHasMore(false);
				console.log('DONE');
			} else {
				setElements(
					Array.from(
						Array(elements.length + Math.min(4, remaining)).keys()
					)
				);
			}
		}, 0);

	return (
		<>
			<div
				id='masonry-container'
				style={{ minHeight: artworks.reduce((_, b) => b + 400) }}
			>
				<MasonryInfiniteScroller
					hasMore={hasMore}
					loadMore={loadMore}
					pageStart={0}
					useWindow={false}
					threshold={500}
					pack={true}
					sizes={[
						{ columns: 2, gutter: 4 },
						{ mq: '768px', columns: 2, gutter: 20 },
						{ mq: '1024px', columns: 3, gutter: 20 },
					]}
					id='masonry'
				>
					{elements.map((e, i) => (
						<img
							src={artworks[e] + '/400'}
							className='mason-img'
							key={'masonry-img-' + i}
						/>
					))}
				</MasonryInfiniteScroller>
			</div>
		</>
	);
};

export default Artwork;
export { ArtworkLoader };
