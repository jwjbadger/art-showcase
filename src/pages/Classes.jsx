import { Card, Col, Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ClassesLoader = async () => {
	const classes = await fetch(
		'https://joesph.kreatesomething.dev/api/classes/'
	);
	return classes.json();
};

const Classes = (props) => {
	const classes = useLoaderData();

	const handleInterest = (e) => {
		fetch('https://joesph.kreatesomething.dev/api/classes/interest/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				class: e.target.parentElement.children[0].innerText,
			}),
		})
			.then((res) => {
				if (res.status === 200)
					console.log('SUCCESSFULLY SHOWED INTEREST');
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<Col>
				{classes
					.filter((e) => e.Type === 'Class')
					.map((clas, i) => (
						<Card
							className={`card-class${
								i === 0 ? ' nomargintop' : ''
							}`}
						>
							<Card.Title>{clas.Name}</Card.Title>
							<Card.Text>{clas.Description}</Card.Text>
							<Button variant='primary' onClick={handleInterest}>
								I'm interested!
							</Button>
						</Card>
					))}
			</Col>
		</>
	);
};

export default Classes;
export { ClassesLoader };
